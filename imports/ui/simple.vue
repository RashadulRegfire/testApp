<template name="post">

    <div class="container flex-auto">
        <div id="navbarTop" class="form-horizontal form-group" style="margin-top: 10%">

            <div class="nav nav-pills fixed-top bg-white" style="--transparent: false;">
                <div class="flex-auto " >


                    <ul> <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png" style="float: left;  "/></ul>
                </div>
                <div class="fr" style="margin-top: 25px;margin-right:5%">


                    <div v-for="email in post.user" >

                        <div v-if="loginuserId==email._id">
                    <b-tabs  pills horizontal>
                        <b-dropdown variant="link" size="lg" class="pointer hover-bg-transparent" right no-caret>  <span slot="text"> <font-awesome-icon icon="user-circle" ></font-awesome-icon></span>

                            <b-dropdown-item href="#">Signed in as
                                <!--<div v-for="email in users" >-->
                                <div>
                                    <strong>{{email.emails[0].address}}
                                    </strong>
                                </div>
                            </b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item v-on:click="allPostLoad">All Post</b-dropdown-item>
                            <b-dropdown-item v-on:click="userprofileLoad(email._id)">Your Profile</b-dropdown-item>
                            <b-dropdown-item href="#"><a  style="" v-on:click="logout">Log Out</a></b-dropdown-item>
                        </b-dropdown>
                    </b-tabs>
                    </div>
                    </div>
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

            <b-card>

                <div class="row">
                    <div class="col-md-6 " style="width: 50%;margin:auto; position: inherit; margin-right: 0%">
                        <input  v-model="searchtext" v-on:keyup="searchPost" size="lg" class="tc"  type="text" placeholder="Search Here"/>
                    </div>
                    <div>
                        <b-dropdown id="ddown-aria" style="float:right;" text="Sort-By"  variant="info" left class="m-3">
                            <b-dropdown-item-button @click="sortByDate">By Date</b-dropdown-item-button>
                            <b-dropdown-item-button @click="sortByEmail">By E-mail</b-dropdown-item-button>
                        </b-dropdown>
                    </div>
                </div>
            <div class="row" style="margin-top: 10%">

            <div v-for=" posts in post.post">
                <div class="col-lg-4 col-md-6 ma2 pa2" style="min-width: 380px;">
                    <b-card img-src="https://picsum.photos/400/200/?image=41"
                            img-fluid
                            img-alt="image"
                            img-top>
                        <div v-for="email in post.user" >
                        <div v-if="posts.userId== email._id">
                            <a  href="" v-on:click="routeToUser(email._id)"> {{email.emails[0].address}}</a>
                        </div>
                        </div>
                        <p class="card-text">
                           {{posts.status}}
                        </p>
                        <div slot="footer">
                            <small class="text-muted"><div class="row"><div class="col-md-5"><b-btn  size="sm" v-on:click="incrementLike(posts._id,posts.Like)"><font-awesome-icon icon="heart"></font-awesome-icon> </b-btn> {{posts.Like}} Like</div><div class="col-md-7"><b-btn v-b-toggle="posts._id" variant="" size="sm"><font-awesome-icon icon="comments"></font-awesome-icon></b-btn> {{posts.CommentCount}} Comments</div></div></small>
                            <b-collapse v-bind:id="posts._id" class="mt-2">
                                <b-card class="ma0 pa0">
                                    <div class="card-text form-group">
                                        <!--<label> <div v-for="email in users" >-->
                                            <!--<strong><a href="#">{{email.emails[0].address}}</a>-->
                                            <!--</strong>-->
                                        <!--</div></label>-->
                                        <div class="">
                                            <div v-for="email in post.user" >
                                                <div v-if="loginuserId==email._id">
                                                <strong><a href="" v-on:click="routeToUser(email._id)">{{email.emails[0].address}}</a>
                                                </strong>
                                                </div>
                                            </div>
                                            <br/>
                                            <div v-if="post.comment">
                                            <div v-for="comments in post.comment">
                                                <div v-if="comments.postId== posts._id">
                                                    <a  href="" v-on:click="routeToUser(comments.userId)"> {{comments.userEmail}}</a> : {{comments.Comment}}

                                                    <br/>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                                <input type="text" id="comment" v-model="comment" placeholder="comments"/>
                                                <button v-on:click="addComment(posts._id)" ><span><font-awesome-icon icon="caret-right"></font-awesome-icon></span></button>
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
            </b-card>
            <div>
                <b-pagination align="right"  :total-rows="totalPage" :per-page="1"   v-on:change="changeLimit(currentPage)" v-model="currentPage"></b-pagination>
            <br>

            <!--<div>currentPage: {{currentPage}}</div>-->
            </div>
        </div>


        <div id="footer" >
            <footer>
                <b-card style="border: 0px;border-top: 2px solid;margin-top: 10%; background-color:darkcyan; color:white" >
                    <div style="text-align: center">
                        <p> Copyright &copy;Regfire Solutions Ltd</p>
                    </div>
                </b-card>
            </footer>
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
    import {Post} from "../api/posts";
    import {Comments} from "../api/comments";



    Vue.use(VueMeteorTracker);
    Vue.use(BootstrapVue);


    export default {
        data() {

            return {
                email: "",
                password: '',
                errors: [],
                status: '',
                comment: "",
                limit: 2,
                count: 0,
                loginuserId: Meteor.userId(),
                searchtext:'',
                currentPage: 1,
                totalPage: 0


            }
        },
        meteor: {
            $subscribe: {
                'userData': [],
                'all': [],
               'post': [this.limit],
            },
            all:  function(){
                let page= Post.find({}).fetch().length/2;


                if(page*2>(parseInt(page)*2)){
                  this.totalPage=parseInt(page)+1;
                }
                else{
                    this.totalPage=page;
                }

                console.log(this.totalPage);
            },
            post: function () {
                let page=this.limit*this.currentPage;
                let tree = {
                    post: Post.find({},{limit:page}).fetch(),
                    user: Meteor.users.find({}).fetch(),
                    comment: Comments.find({}).fetch()
                };

                return tree;
            },
            userData: function () {

                Meteor.subscribe('userData');
                if (this.$route.params.id) {
                    return Meteor.users.find({id: this.$route.params.id}).fetch();
                }
                //  return Meteor.users.find({id:this.userId}).fetch();
            },

        },
        methods: {

            logout: function () {
                if (Meteor.userId()) {
                    Meteor.logout(() => {
                        this.$router.push('/');
                    });

                }
            },

            savePost: function (e) {
                Meteor.call('savePost', this.$refs.content.value, Meteor.userId());
                e.preventDefault();
            },
            incrementLike: function (id, like) {

                Meteor.call('incrementLike', id, like);
            },
            addComment: function (postId) {
                let user = Meteor.users.findOne({_id: Meteor.userId()});
                let userEmail = user.emails[0].address;

                Meteor.call('addComment', postId, userEmail, this.comment);
            },
            userprofileLoad: function (id) {
                this.$router.push({name: 'userprofile/id', params: {id: id}});
            },
            allPostLoad: function () {
                this.$router.push('/simple');
            },
            routeToUser: function (id) {

                this.$router.push({name: 'userprofile/id', params: {id: id}});
            },
            changeLimit(e) {
                console.log('Current Page',this.currentPage);
               // this.currentPage=
               // this.limit=this.limit+this.currentPage.value;
               //  console.log("Change",  this.limit);

                this.$subscribe('post', [this.limit]);

            },
            sortByDate(){
               console.log(Post.find({},{sort: {Date:-1}}).fetch());
               this.post.post= Post.find({},{sort: {Date: -1}}).fetch();


            },
            sortByEmail(){
                this.post.post=[],

                Meteor.users.find({ },{sort:{'emails.address': 1 }}).fetch().forEach((user)=>{
                   Post.find({}).fetch().forEach((post)=>{
                       if(post.userId==user._id){
                           this.post.post.push(post);
                       }
                   });
                });
            },
            searchPost(e){

                console.log(this.searchtext);
                let search=this.searchtext;
                if(search!= ""){

                    if(Post.find({$or:[{ 'status':{'$regex':search, $options: 'i'}}]}).fetch()){
                        this.post.post=(Post.find({$or:[{ 'status':{'$regex':search, $options: 'i'}}]}).fetch());
                    }

                   // console.log(Meteor.users.find({$or:[{ 'emails.address':{'$regex':search}}]}).fetch());

                    // Meteor.users.find({ $or:[{ 'emails.address':{'$regex':search}}] },{sort:{'emails.address': 1 }}).fetch().forEach((user)=>{
                    //     Post.find({}).fetch().forEach((post)=>{
                    //         if(post){
                    //             if(post.userId==user._id){
                    //
                    //                 this.post.post=(post);
                    //             }
                    //         }
                    //
                    //     });
                    // });
                }
                else{

                    this.post.post=(Post.find({}).fetch());
                }

                e.preventDefault();
            }



        },
        mounted () {


          //  alert(this.$router.props.limit);
            // Subscribes to the 'threads' publication with two parameters
        //  this.$subscribe('post', [this.limit]);
         // this.$subscribe('all');

        },
        // computed: {
        //
        // }
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