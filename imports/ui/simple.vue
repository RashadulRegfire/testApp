<template>

    <div class="container flex-auto">
        <div id="navbarTop" class="form-horizontal form-group" style="margin-top: 10%">

            <div class="nav nav-pills fixed-top bg-white" style="--transparent: false;">
                <div class="flex-auto " >


                    <ul> <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png" style="float: left;  "/></ul>
                </div>
                <div class="fr" style="margin-top: 25px;margin-right:5%">



                    <b-tabs  pills horizontal>
                        <b-dropdown variant="link" size="lg" class="pointer hover-bg-transparent" right no-caret>  <span slot="text"> <font-awesome-icon icon="user-circle" ></font-awesome-icon></span>

                            <b-dropdown-item href="#">Signed in as
                                <div v-for="email in users" >
                                    <strong>{{email.emails[0].address}}
                                    </strong>
                                </div>
                            </b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item href="#">Your Profile</b-dropdown-item>
                            <b-dropdown-item href="#"><a  style="" v-on:click="logout">Log Out</a></b-dropdown-item>
                        </b-dropdown>













                    </b-tabs>




                </div>
            </div>
        </div>
        <div class="">
            <div class="row">
                <div class="tweet-body center">
                    <form method="post" enctype="multipart/form-data">
                        <div class="row">
                            <textarea class="status" ref="content" name="status" placeholder="Write your post here!" rows="5" cols="50"></textarea>
                        </div>
                        <div class="row" style="float: right; margin-right: 31%">
                          <!--<div class="pa2"> <button >Browse</button></div>-->
                        <div class="pa2"> <button v-on:click="savePost">Post</button></div>
                        </div>

                    </form>
                </div>
            </div>
            <div class="row">
            <div v-for=" post in posts">
                <div class="col-lg-4 col-md-6" style="min-width: 320px">
                    <b-card img-src="https://picsum.photos/400/200/?image=41"
                            img-fluid
                            img-alt="image"
                            img-top>
                        <a href="#">
                           {{post.userEmail}}
                        </a>
                        <p class="card-text">
                           {{post.status}}
                        </p>
                        <div slot="footer">
                            <small class="text-muted"><div class="row"><div class="col-md-5"><b-btn  size="sm" v-on:click="incrementLike(post._id,post.Like)"><font-awesome-icon icon="heart"></font-awesome-icon> </b-btn> {{post.Like}} Like</div><div class="col-md-7"><b-btn v-b-toggle.collapse1 variant="" size="sm"><font-awesome-icon icon="comments"></font-awesome-icon></b-btn> {{post.CommentCount}} Comments</div></div></small>
                            <b-collapse id="collapse1" class="mt-2">
                                <b-card class="ma0 pa0">
                                    <div class="card-text form-group">
                                        <!--<label> <div v-for="email in users" >-->
                                            <!--<strong><a href="#">{{email.emails[0].address}}</a>-->
                                            <!--</strong>-->
                                        <!--</div></label>-->
                                        <div class="row">
                                            <div v-for="email in users" style="padding-right: 4em">
                                                <strong><a href="#">{{email.emails[0].address}}</a>
                                                </strong>
                                            </div>
                                            <div v-for="comments in post.Comment">
                                                <div v-for=" lists in comments">
                                                    <a href="#"> {{lists.userEmail}}</a> : {{lists.Comments}}
                                                </div>

                                            </div>
                                        </div>
                                                <input type="text" id="comment" v-model="comment" placeholder="comments"/>
                                                <button v-on:click="addComment(this.comment.value,post._id,post.CommentCount)" ><span><font-awesome-icon icon="caret-right"></font-awesome-icon></span></button>
                                            </div>
                                            <!--<b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>-->
                                    <!--<b-collapse id=collapse1_inner class="mt-2">-->
                                        <!--<b-card>Hello!</b-card>-->
                                    <!--</b-collapse>-->
                                </b-card>
                            </b-collapse>
                        </div>
                    </b-card>
                </div>
            </div>


            </div>
        </div>

    </div>

</template>
<script>
    import {Meteor} from 'meteor/meteor'
    import Vue from 'vue';
    import 'tachyons';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import BootstrapVue from 'bootstrap-vue';
    import VueMeteorTracker from 'vue-meteor-tracker';
    import {Post} from "../api/collection";


    Vue.use(VueMeteorTracker);
    Vue.use(BootstrapVue);
    export default {
        data() {

            return {
                email: [],
                password: '',
                errors: [],
                status: '',
                comment: []

            }
        },
        meteor: {
            $subscribe: {
                'users': [],
                'posts': [],
            },
            users: function () {

                // console.log("Userid", Meteor.userId());
                //
                // console.log("user", Meteor.users.findOne(Meteor.userId()));
               return Meteor.users.find(Meteor.userId());
            },
            posts: function(){
                return Post.find({}).fetch()
            }
        },
        methods: {

            logout: function() {
                if(Meteor.userId()) {
                    Meteor.logout(() => {

                        this.$router.push('/');
                    });

                }
            },
            savePost: function(e){
                  let status= this.$refs.content.value;
                  let user=Meteor.users.findOne({_id: Meteor.userId()});

                Post.insert({
                    userEmail: user.emails[0].address,
                    status: status,
                    Like: 0,
                    Comment: {},
                    CommentCount: 0,
                    date: new Date()
                })
                  e.preventDefault();
        },
            incrementLike: function (id,like) {
                Post.update({_id: id}, {$set:{ "Like": like+1}});
            },
            addComment: function (comment,id,count) {
                let user=Meteor.users.findOne({_id: Meteor.userId()});

                Post.update({_id: id}, {$push:{'Comment.List':{userEmail:user.emails[0].address,Comments:comment} },$set:{CommentCount: count+1}});


            }

        }
    }


</script>

<style>
    .nav-pills .mytab .nav-link:not(.active) {
        background-color: white !important;
        color:rgb(50, 209, 209);

    }

    .nav-pills .mytab .nav-link {
        background-color: rgb(50, 209, 209) !important;
        color:white;
    }

    .tab-content > .tab-pane {

        border-left: 0px none;
    }
    btn-seceondary{
        border:none;
        background-color: white;
    }
    .tweet-body{
        width: 100%;
        margin-left: 60px;
    }
    .tweet-body textarea{
        overflow: hidden;
        resize: none;

        height:80px;
        border:1px solid;
        border-radius: 4px;
        padding: 10px;
        font-size: 14px;
    }
    .center {
        margin: auto;
        width: 50%;
        padding: 10px;

    }

</style>