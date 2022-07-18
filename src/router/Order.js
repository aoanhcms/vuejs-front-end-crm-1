export default [
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/order/order/Order.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Danh sách đơn hàng',
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
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Danh sách Nguồn đơn hàng',
          active: true,
        },
      ],
    },
  },
  {
    path: '/orders/create',
    name: 'orders-create',
    component: () => import('@/views/order/order/CreateOrder.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Danh sách đơn hàng',
          to: {name: 'orders'}
        },
        {
          text: 'Tạo mới',
          active: true,
        },
      ],
    },
  },
  {
    path: '/orders/edit/:id',
    name: 'orders-edit',
    component: () => import('@/views/order/order/CreateOrder.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Danh sách đơn hàng',
          to: {name: 'orders'}
        },
        {
          text: 'Sửa',
          active: true,
        },
      ],
    },
  },
  {
    path: '/orders/source/create',
    name: 'orders-source-create',
    component: () => import('@/views/order/order-source/CreateSource.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Danh sách Nguồn đơn hàng',
          to: { name: 'orders-source'}
        },
        {
          text: 'Tạo mới',
          active: true,
        },
      ],
    },
  },
  {
    path: '/orders/source/edit/:id',
    name: 'orders-source-edit',
    component: () => import('@/views/order/order-source/CreateSource.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Danh sách Nguồn đơn hàng',
          to: { name: 'orders-source'},
        },
        {
          text: 'Sửa',
        },
      ],
    },
  },
  {
    path: '/orders/status',
    name: 'orders-status',
    component: () => import('@/views/order/order-status/OrderStatus.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Trạng thái đơn hàng',
          active: true,
        },
      ],
    },
  },
  {
    path: '/orders/status/create',
    name: 'orders-status-create',
    component: () => import('@/views/order/order-status/OrderStatusCreate.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Trạng thái đơn hàng',
          to: { name: 'orders-status'},
        },
        {
          text: 'Tạo mới',
          active: true,
        },
      ],
    },
  },
  {
    path: '/orders/status/edit/:id',
    name: 'orders-status-edit',
    props: true,
    component: () => import('@/views/order/order-status/OrderStatusCreate.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Danh sách Trạng thái đơn hàng',
          to: { name: 'order-status'},
        },
        {
          text: 'Sửa',
          active: true,
        },
      ],
    },
  },
]
