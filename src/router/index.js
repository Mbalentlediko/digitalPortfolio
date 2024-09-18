import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: ()  => import('@/views/About.vue')

  },
  {
    path: '/education',
    name: 'Education',
    component: ()  => import('@/views/Education.vue')

  },
  {
    path: '/projects',
    name: 'Projects',
    component: ()  => import('@/views/Projects.vue')

  },
  {
    path: '/contact',
    name: 'contact',
    component: ()  => import('@/views/Contact.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
