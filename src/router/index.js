import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import filmsdetail from '../views/filmsdetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/films',
    name: 'films',
    // route level code-splitting
    // this generates a separate chunk (films.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "films" */ '../views/films.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/signup.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    // route level code-splitting
    // this generates a separate chunk (signin.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signin" */ '../views/signin.vue')
  },
  {
    path: '/movie/:id',
    name:'Movie Detail',
    component:filmsdetail
    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
