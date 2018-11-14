import {Meteor} from 'meteor/meteor';
import '../imports/api/users';

import {Post} from "../imports/api/collection";


Meteor.startup(()=>{
    Meteor.publish('userData', function(){
       // alert(this.userId);


        return Meteor.users.find({_id: this.userId})


    });
    Meteor.publish('posts', function(){
        return Post.find({});


    });

    Meteor.publish('all', function(){

        return Post.find();


    });

    Meteor.methods({
        savePost(status,userEmail){

            Post.insert({
                userEmail: userEmail,
                status: status,
                Like: 0,
                Comment: {},
                CommentCount: 0,
                date: new Date()
            })
        },
        incrementLike(id,like){

            Post.update({_id: id}, {$set:{ "Like": like+1}});
        },
        addComment(id,userEmail,count,comment){
            Post.update({_id: id}, {$push:{'Comment.List':{userEmail:userEmail,Comments:comment} },$set:{CommentCount: count+1}});
        },
        routeToUser: function(email){
            return Post.find({userEmail:email}).fetch();
        }
    })

})