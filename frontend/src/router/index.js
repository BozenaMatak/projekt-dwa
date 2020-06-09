import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Jobs from '../views/Jobs.vue';
import {Auth} from '@/services';

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    component: Home,
    children : [
      {
        path: '/Home',
        name: 'Jobs',
        component: Jobs
      },
      {
        path: 'Job/:id',
        props: true,
        name: 'Job-Detail',
        component: () => import(/* webpackChunkName: "job-detail" */ '../views/JobDetail.vue')
      },
    ]
  },
  {
    path: '/',
    component: Home,
    children : [
      {
        path: '',
        name: 'Jobs',
        component: Jobs
      },
      {
        path: 'Job/:id',
        props: true,
        name: 'Job-Detail',
        component: () => import(/* webpackChunkName: "job-detail" */ '../views/JobDetail.vue')
      },
    ]
  },
  {
    path: '/PostJob',
    name: 'PostJob',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PostJob" */ '../views/PostJob.vue')
  },
  {
    path: '/Naslovna',
    name: 'Naslovna',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PostJob" */ '../views/Naslovna.vue'),
  },
  {
    path: '/Prijava',
    name: 'Prijava',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Prijava.vue')
  },
  {
    path: '/Registracija_zaposlenik',
    name: 'Registracija_zaposlenik',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Registracija_zaposlenik.vue')
  },
  {
    path: '/Registracija_poslovoda',
    name: 'Registracija_poslovoda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Registracija_poslovoda.vue')
  },
  {
    path: '/mojprofil',
    name: 'mojprofil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/mojprofil.vue')
  },
 
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  const javneStranice = ['/Prijava', '/Naslovna', '/Registracija_zaposlenik', '/Registracija_poslovoda', '/About']
  const loginPotreban = !javneStranice.includes(to.path)
  const user = Auth.getUser();

  if(loginPotreban && !user){ //ako je login potreban i nemamo korisnika onda ne zelimo ici na next
    next('/Naslovna'); 
    return 
  }
  
  next()
})

export default router
