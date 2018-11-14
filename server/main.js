import {Meteor} from 'meteor/meteor';
import '../imports/api/users';

import {Post} from "../imports/api/posts";
import {Comments} from '../imports/api/comments';
import { publishComposite } from "meteor/reywood:publish-composite";


// publishComposite('post', function(){
//     return{
//         find(){
//             return Post.find();
//         },
//         children: [
//             {
//                 find(post){
//                     console.log(Meteor.users.find({
//                         _id : post.userId
//                     }).fetch());
//
//                     return Meteor.users.find({
//                         _id : post.userId
//                     });
//                 }
//             },
//             {
//                 find(post){
//                     console.log(Comments.find({
//                         postId: post._id
//                     }).fetch());
//                     return Comments.find({
//                         postId: post._id
//                     });
//                 },
//                 children: [
//                     {
//                         find(comment,post){
//                             console.log(Meteor.users.find({
//                                 _id:comment.userId
//                             }));
//
//                             return Meteor.users.find({
//                                 _id:comment.userId
//                             })
//                         }
//                     }
//                 ]
//             }
//         ]
//     }
//
// });

Meteor.startup(()=>{


    Meteor.publishComposite("post", {
        find: function() {
            return Post.find({}, {
                sort: { createdAt: -1 },
                limit: 10
            });
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
    });

    Meteor.publishComposite('postsByUser', function(userId) {
        return {
            find() {
                // Find posts made by user. Note arguments for callback function
                // being used in query.
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



    // Meteor.publish('userData', function(){
    //    // alert(this.userId);
    //
    //
    //     return Meteor.users.find({_id: this.userId})
    //
    //
    // });
    // Meteor.publish('posts', function(){
    //     return Post.find({});
    //
    //
    // });
    //
    // Meteor.publish('all', function(){
    //
    //     return Post.find();
    //
    //
    // });

    Meteor.methods({
        savePost(status,id){

            Post.insert({
                userId: id,
                status: status,
                Like: 0,
                CommentCount: 0,
                date: new Date()
            })
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