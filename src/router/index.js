import Vue from 'vue'
import VueRouter from 'vue-router'

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
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users',
      name: 'users',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/user/list/User.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'User List',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users/create',
      name: 'users-create',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/user/list/Create.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Create new',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users/edit',
      name: 'users-edit',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/user/list/Edit.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users/group',
      name: 'users-group',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/user/group/UserGroup.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Group',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users/group/create',
      name: 'users-group-create',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/user/group/UserGroupCreate.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Group',
            active: true,
          },
        ],
      },
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/views/order/Order.vue'),
      meta: {
        pageTitle: 'Order',
        breadcrumb: [
          {
            text: 'List',
            active: true,
          },
        ],
      },
    },
    {
      path: '/orders/source',
      name: 'orders-source',
      component: () => import('@/views/order/order-source/Source.vue'),
      meta: {
        pageTitle: 'Order',
        breadcrumb: [
          {
            text: 'Nguồn đơn hàng',
            active: true,
          },
        ],
      },
    },
    {
      path: '/orders/source/create',
      name: 'orders-source',
      component: () => import('@/views/order/order-source/Create.vue'),
      meta: {
        pageTitle: 'Order',
        breadcrumb: [
          {
            text: 'Nguồn đơn hàng',
            active: true,
          },
        ],
      },
    },
    {
      path: '/orders/create',
      name: 'orders-create',
      component: () => import('@/views/order/Create.vue'),
      meta: {
        pageTitle: 'Order',
        breadcrumb: [
          {
            text: 'Create new',
            active: true,
          },
        ],
      },
    },
    {
      path: '/orders/status',
      name: 'orders-status',
      component: () => import('@/views/order/order-status/Status.vue'),
      meta: {
        pageTitle: 'Order',
        breadcrumb: [
          {
            text: 'Trạng thái đơn hàng',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
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
