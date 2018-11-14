import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from '../imports/routes/routes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faLock,faEnvelope,faAddressBook,faPhone,faUserCircle,faHeart,faComments,faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret,faLock,faEnvelope,faAddressBook,faPhone,faUserCircle,faHeart,faComments,faCaretRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false



// App layout
import AppLayout from '../imports/ui/appLayout';



// App start
Meteor.startup(() => {
    // Start the router
    const router = routerFactory.create();

    new Vue({
        el: '#test',
        router,
        ...AppLayout
         })
});