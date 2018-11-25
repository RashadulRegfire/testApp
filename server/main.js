import {Meteor} from 'meteor/meteor';
import '../imports/api/users';

import {Post} from "../imports/api/posts";
import {Comments} from '../imports/api/comments';
import { publishComposite } from "meteor/reywood:publish-composite";
import SimpleSchema from 'simpl-schema';



const Schemas= new SimpleSchema({
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
    status: {type: String, min: 5},
    Like: {type: Number},
    CommentCount: {type: Number},
    Date:{type: Date}


});

// const loginSchema= new SimpleSchema({
//     email: {type:String, regEx: SimpleSchema.RegEx.Email, optional: false},
//     password: {type:String, regEx:SimpleSchema.RegEx.password},
//     address: {type: String, optional:true},
//     contactNo: {type: Number, regEx:SimpleSchema.RegEx.Phone,optional: true }
// });











Meteor.startup(()=>{

    Meteor.publishComposite('all', function() {
        return {
            find() {
                // Find posts made by user. Note arguments for callback function
                // being used in query.
                return Post.find({}, {sort: {createdAt: -1}});
            },
            children: [
                {
                    find: function (post) {
                        return Meteor.users.find({_id: post.userId});
                    }
                },
                {
                    find: function (post) {
                        return Comments.find(
                            {postId: post._id})
                    },
                    children: [
                        {
                            find: function (comment, post) {
                                return Meteor.users.find({_id: comment.userId});
                            }
                        }
                    ]
                }
            ]
        }
    });
    Meteor.publishComposite('post', function(limit) {
        return {
            find() {
                return Post.find({}, {sort: {createdAt: -1}, limit: limit});
            },
            children: [
                {
                    find: function (post) {
                        return Meteor.users.find({_id: post.userId});
                    }
                },
                {
                    find: function (post) {
                        return Comments.find(
                            {postId: post._id})
                    },
                    children: [
                        {
                            find: function (comment, post) {
                                return Meteor.users.find({_id: comment.userId});
                            }
                        }
                    ]
                }
            ]
        }
    });

    Meteor.publishComposite('postsByUser', function(userId) {
        return {
            find() {
                return Post.find({ userId: userId });
            },
        children: [
            {
                find: function(post) {
                    return Meteor.users.find({ _id: post.userId });
                }
            },
            {
                find: function(post) {

                    return Comments.find(
                        { postId: post._id })
                },
                children: [
                    {
                        find: function(comment, post) {
                            return Meteor.users.find({ _id: comment.userId });
                        }
                    }
                ]
            }
        ]
    }
    });


    Meteor.methods({

        savePost(status,id){

            Post.insert({
                userId: id,
                status: status,
                'Like': 0,
                'CommentCount': 0,
                'Date': new Date()
            }, (err,res)=>{
               if(err){
                  throw new Meteor.Error('404','Status should not be empty!!');
               }
            });
        },
        incrementLike(id,like){

            Post.update({_id: id}, {$set:{ "Like": like+1}});
        },
        addComment(id,userEmail,comment){

            Comments.insert({
               postId: id,
               userId: this.userId,
                userEmail: userEmail,
                Comment: comment,

            });
            Post.update({_id: id}, {$inc:{ CommentCount: 1}});


        },
        routeToUser: function(id){
            return Post.find({userId:id}).fetch();
        }
    })

})