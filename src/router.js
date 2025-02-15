// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

//import Converters from './views/Converters.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/converters',
    name:'Converters',
    component:() => import('./views/Converters.vue')
  },
   {
    path:'/algebra_solver',
    name:'Algebra',
    component:() => import('./views/AlgebraSolver.vue')
  },
  {
    path:'/calculator',
    name:'Calculator',
    component:() => import('./views/Calculator.vue')
  },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: ()=>import('./components/notfound.vue')
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top when navigating to a new route
    return { x: 0, y: 0 };
  }
});

export default router;