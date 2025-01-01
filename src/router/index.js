// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue';
import Inbox from '../pages/Inbox.vue';
import Upcoming from '../pages/Upcoming.vue';
import scanning from '../pages/scanning.vue';
import Today from '../pages/Today.vue';
import History from '../pages/History.vue';
import Otp from '../pages/Otp.vue';

import Index from '../pages/index.vue';
import MainLayout from '../layouts/MainLayout.vue'
import InsideLayout from '../layouts/InsideLayout.vue'
const routes = [
  {
    path: '/auth',
    name: 'HomePage',
    component: MainLayout,
    children:[
      {
        path: 'login',
      component: Login,
        },
      {
      path: 'register',
    component: Register,
      },
    
    ]
  },
  {
    path: '/',
    name: 'Inside',
    component: InsideLayout,
    children:[
      {
        path: 'cctv',
      component: scanning,
        },
        {
          path: '/history',
        component: History,
          },
    ]
  },
  // {
  //   path: '/home',
  //   name: 'HomePage',
  //   component: MainLayout,
  //   children:[
  //     {
  //     path: '',
  //   component: Home,
  //     }
  //   ]
  // },
  {
    path: '/about',
    name: 'AboutPage',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
