import Vue from 'vue'
import VueRouter from 'vue-router'

// import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn } from '@/auth/utils'

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
        redirectIfLoggedIn: true,
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

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn === null) {
    next({ name: 'login' })
  }

  return next()
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
