<template>

    <div class="container flex-auto">
        <div id="navbarTop" class="form-horizontal form-group" style="margin-top: 10%">

            <div class="nav nav-pills fixed-top bg-white" style="--transparent: false;">
                <div class="flex-auto " >


                    <ul> <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png" style="float: left;  "/></ul>
                </div>
                <div class="fr" style="margin-top: 25px;margin-right:5%">

                    <b-tabs  pills horizontal>

                             <button class="btn btn-info" style="background-color: darkcyan;" @click="logout">Log Out</button>

                    </b-tabs>


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
            logout: function() {
                if(Meteor.userId()){
                    Meteor.logout(()=>{

                        this.$router.push('/');
                    });

                }



            }




        }
    }


</script>

<style>


</style>