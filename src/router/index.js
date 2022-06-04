import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRoutes from './User'

import OrderRoutes from './Order'

import ClassRoutes from './class-and-teacher'
import BusinessRoutes from './Business'
import authRoutes from './auth'

import marketingRoutes from './Marketing'

import reportRoutes from './Report'

import staffRoutes from './Staff'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Dashboard',
        breadcrumb: [
          {
            text: 'Dashboard',
            active: true,
          },
        ],
      },
    },
    ...ClassRoutes,
    ...BusinessRoutes,
    ...OrderRoutes,
    ...UserRoutes,
    ...authRoutes,
    ...marketingRoutes,
    ...reportRoutes,
    ...staffRoutes,
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
