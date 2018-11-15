<template>
    <div class="container">
        <div id="test">
            <div id="navbarTop" class="form-horizontal form-group" style="margin-top: 10%">

                <div class="nav nav-pills fixed-top bg-white" style="--transparent: false;">
                    <div class="flex-auto " >


                        <ul> <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png " style="background-position: inherit;"/></ul>
                    </div>
                    <div class="fr" style="margin-top: 25px;margin-right: 4%">

                        <b-tabs  pills horizontal >
                            <b-tab id="Home" title="Home" @click=""title-item-class="mytab">

                            </b-tab>

                            <b-tab id="Join" title="Join" title-item-class="mytab">

                                <form class="login100-form validate-form  dropdown-menu dropdown-menu-right show">
                                    <b-card >
                                    <span class="login100-form-title">
                                        <p style="text-align: center;margin-bottom: 10px">
                                            <strong>Register</strong>
                                        </p>

                                    </span>

                                        <div class="wrap-input100" >
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon3"><font-awesome-icon icon="envelope" /></span>
                                                </div>
                                                <input v-model="email" ref="email" type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                                            </div>

                                        </div>

                                        <div  class="wrap-input100 validate-input" data-validate="Password is required">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon4"><font-awesome-icon icon="lock" /></span>
                                                </div>
                                                <input v-model="password" ref="password"type="password" class="form-control" placeholder="Password" aria-label="Pasword" aria-describedby="basic-addon1">
                                            </div>


                                        </div>

                                        <div class="wrap-input100 validate-input" data-validate="Contact number must be digit">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon5"><font-awesome-icon icon="phone" /></span>
                                                </div>
                                                <input v-model="contactNo"  ref="contactNo" type="text" class="form-control" placeholder="Contact No" aria-label="Contact No" aria-describedby="basic-addon1">

                                            </div>


                                        </div>

                                        <div class="wrap-input100 ">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon6"><font-awesome-icon icon="address-book" /></span>
                                                </div>
                                                <textarea v-model="address"  ref="address" type="text" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1"></textarea>
                                            </div>


                                        </div>

                                        <div class="container-login100-form-btn" style="text-align: center">
                                            <button  class="btn btn-info" @click="registerUser" >
                                                Register
                                            </button>
                                        </div>
                                    </b-card>
                                </form>

                            </b-tab>
                            <b-tab id="Log in" title="Log in" title-item-class="mytab">

                                <form @submit="login" class="login100-form validate-form dropdown dropdown-menu dropdown-menu-right show">
                                    <b-card >
                                    <span class="login100-form-title">
                                        <p style="text-align: center;margin-bottom: 10px">
                                          <strong>  Member Login</strong>
                                        </p>

                                    </span>

                                        <div class="wrap-input100 validate-input"  data-validate="Valid email is required: ex@abc.xyz">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><font-awesome-icon icon="envelope" /></span>
                                                </div>
                                                <input type="text" class="form-control" v-model="email" ref="email" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                                            </div>

                                        </div>

                                        <div class="wrap-input100 validate-input" data-validate="Password is required">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon2"><font-awesome-icon icon="lock" /></span>
                                                </div>
                                                <input type="password" class="form-control" v-model="password" ref="password" placeholder="Password" aria-label="Pasword" aria-describedby="basic-addon1">
                                            </div>


                                        </div>

                                        <div class="container-login100-form-btn" style="text-align: center">
                                            <button  @click="" class="btn btn-success"  >
                                                Login
                                            </button>
                                        </div>




                                    </b-card>
                                </form>


                            </b-tab>
                        </b-tabs>


                    </div>
                </div>
            </div>
        </div>

        <div id="content" style="border-top: gray 4px solid;">

            <div class=" container ">
                <div class="row">
                    <img src="https://images.pond5.com/idea-sharing-animated-word-cloud-footage-078237007_prevstill.jpeg" style="height: 320px;width: 100% " />
                </div>

                <div class="mt2 ma0 pa0">
                    <div class=" row mt4">
                        <div class="col-md-6 " style="float:right; margin-left: 0px; padding-left: 0px">
                            <b-card  bg-variant="white" text-variant="black" title="Share Concept" style="border: gray 2px solid">
                                <p class="card-text">
                                <div class="blockquote"> A book lying idle on a shelf is wasted ammunition. Like money, books must be kept in constant circulation... A book is not only a friend, it makes friends for you. When you have possessed a book with mind and spirit, you are enriched. But when you pass it on you are enriched threefold.
                                    <br/><div class="blockquote-footer">Henry Miller, The Books in My Life</div></div><br/>

                                <p style="font-size: 16px; "> <strong>Knowledge is just like a book lying on a shelf. Do you want to share and enrich it?</strong><br/>
                                    <strong style=" text-align: center"> Join us and share what do you know that may be ordinary but will help others to enrich them.</strong></p>


                                <b-button v-on:click="goToRegister" style="background-color: darkcyan" variant="primary" class="mt4">Join Us</b-button>
                            </b-card>
                        </div>
                        <div class="col-md-6 ml0 pr0 fr" style="float:left; margin-right: 0px; padding-right: 0px" >
                            <b-card  bg-variant="white" text-variant="black" title="Get Connected" style="border: gray 2px solid">
                                <p class="card-text" style="margin-top: 8%">
                                <div class="blockquote" style="margin-top: 8%"> Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.
                                    <br/><div class="blockquote-footer"> Henry Ford</div><br/> </div>

                                <div style="font-size: 16px;margin-top: 10%"> <strong> Want to get new ideas and learn what others in your network get connected and share your idea as well as get others?</strong><br/>
                                    <div style="margin-top: 7% ;margin-bottom: 7%"> <strong style=" text-align: center;" > Join us and share what do you know that may be ordinary but will help others to enrich them.</strong></div></div>




                                <b-button v-on:click="goToRegister" style="background-color: darkcyan" variant="primary">Join Us</b-button>
                            </b-card>
                        </div>

                    </div>
                </div>

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

    Vue.use(BootstrapVue);
  //  import { Accounts } from 'meteor/accounts-base';
    export default {
        data() {
            return {

                email: '',
                password: '',
                errors: []

            }
        },

        methods: {
            login: function(e) {
                let email=this.email;
                let password=this.password;
                Meteor.loginWithPassword({email},password,(err)=>{
                    if(err){
                        this.$router.push('/');
                    }
                    else {
                        this.$router.push('/simple');
                    }
                });
                e.preventDefault();
            },
            registerUser: function(e){

               let email=this.$refs.email.value;
                let password=this.$refs.password.value;
                // let contactNo=this.$refs.contactNo.value;
                // let address=this.$refs.address.value;
                Accounts.createUser({email,password}, (err)=> {
                    if (err) {
                        this.$router.push('/register');
                    }

                    else {
                        this.$router.push('/simple');
                    }
                });
                e.preventDefault();
            },
            goToRegister: function () {

                this.$router.push('/register');
            }



        }
    }
</script>
<style>
/*<style lang="less">*/
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
</style>