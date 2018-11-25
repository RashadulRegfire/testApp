<template >

    <div style="background:url('http://www.habilelabs.io/wp-content/uploads/2017/09/it-background-5.jpg') no-repeat center center fixed;-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; ">
        <div id="navbarTop" class="form-horizontal form-group" style="margin-top: 0%">

            <div class="nav nav-pills fixed-top bg-white" style="--transparent: false;">
                <div class="flex-auto " >


                    <ul> <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png" style="float: left;"/></ul>
                </div>
                <div class="fr" style="margin-top: 25px">

                    <b-tabs  pills horizontal>
                        <b-tab id="Home" title="Home" v-on:click="goToHome" title-item-class="mytab">

                        </b-tab>

                        <b-tab id="Join" title="Join" title-item-class="mytab" active>



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
                                            <input type="text" class="form-control" v-model="password" ref="password" placeholder="Password" aria-label="Pasword" aria-describedby="basic-addon1">
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

    <div class="container" >
        <div class="row main">
            <div class="main-login main-center " style="margin-top: 10%;">


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
                            <textarea v-model="address"  ref="address" type="text" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div class="form-group ">
                        <button v-on:click="registerUser" class="btn btn-primary btn-lg btn-block">Register</button>
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

    import Vue from 'vue';
    import 'tachyons';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import BootstrapVue from 'bootstrap-vue';

    Vue.use(BootstrapVue);
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
                alert(email);
                alert(password);
                Meteor.loginWithPassword({email},password,(err)=>{
                    if(err){
                        alert(err)
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
            goToHome: function () {

                this.$router.push('/');
            }



        }
    }
</script>
<style>
    /*
    /* Created by Filipe Pina
     * Specific styles of signin, register, component
     */
    /*
     * General styles
     */



    .main{
        margin:50px 15px;
    }



    .form-group{
        margin-bottom: 15px;
    }



    .main-login{
        background-color: #fff;
        /* shadows and rounded borders */
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

    }
    .form-control {
        height: auto!important;
        padding: 8px 12px !important;
    }
    .input-group {
        -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
        -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
    }

    .main-center{
        margin-top: 30px;
        margin: 0 auto;
        max-width: 400px;
        padding: 10px 40px;
        background:#009edf;
        color: #FFF;
        text-shadow: none;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);

    }
   input-group-addon  {
        color: #009edf;
        font-size: 17px;
    }



</style>