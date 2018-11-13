import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

import Home from '../ui/home.vue';
import Simple from '../ui/simple';
import Register from '../ui/register';
import UserProfile from '../ui/userprofile';


// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
});
RouterFactory.configure(factory => {
    // Simple routes
    factory.addRoutes([
        {
            path: '/',
            name: 'home',
            component: Home

        },
        {
            path: '/simple',
            name: 'simple',
            component: Simple

        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/userprofile',
            name: 'userprofile',
            component: UserProfile

        },
    ]);
});

export default routerFactory;