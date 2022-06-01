export default [
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/order/Order.vue'),
    meta: {
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
      pageTitle: 'Đơn hàng',
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
    component: () => import('@/views/order/CreateOrder.vue'),
    meta: {
      pageTitle: 'Đơn hàng',
      breadcrumb: [
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
    component: () => import('@/views/order/CreateOrder.vue'),
    meta: {
      pageTitle: 'Đơn hàng',
      breadcrumb: [
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
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Nguồn đơn hàng',
          active: true,
        },
        {
          text: 'Tạo mới',
        },
      ],
    },
  },
  {
    path: '/orders/source/edit/:id',
    name: 'orders-source-edit',
    component: () => import('@/views/order/order-source/CreateSource.vue'),
    meta: {
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Nguồn đơn hàng',
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
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Trạng thái đơn hàng',
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
      pageTitle: 'Đơn hàng',
      breadcrumb: [
        {
          text: 'Trạng thái đơn hàng',
        },
        {
          text: 'Sửa',
          active: true,
        },
      ],
    },
  },
]
