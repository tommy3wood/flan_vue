import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Signup from "../views/Signup.vue";
import Login from '../views/Login.vue';
import Logout from "../views/Logout.vue";


import EventsIndex from '../views/EventsIndex.vue';
import EventsShow from '../views/EventsShow.vue';




Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/events', name: 'events-index', component: EventsIndex },

  { path: '/signup', name: 'signup', component: Signup },
  { path: '/login', name: 'login', component: Login },
  { path: '/logout', name: 'logout', component: Logout },

  { path: '/events-show', name: 'events-show', component: EventsShow }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
