<!-- /imports/ui/AppLayout.vue -->
<template>
    <div>
        <!-- Menu -->
        <app-menu></app-menu>

        <!-- Route content -->
        <router-view></router-view>
    </div>
</template>

<script>
   import AppMenu from './appMenu.vue';

    export default {
     
        components: {
             'app-menu': AppMenu,
        }
    }
</script>