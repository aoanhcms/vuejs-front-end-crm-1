export default [
  {
    path: '/platform-marketing',
    name: 'platform-marketing',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/platform-marketing/Manage.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Platform Marketing',
      breadcrumb: [
        {
          text: 'Quản Lý Số Liệu Marketing Theo Platform',
          active: true,
        },
      ],
    },
  },
  {
    path: '/platform-marketing/create',
    name: 'platform-marketing-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/platform-marketing/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Platform Marketing',
      breadcrumb: [
        {
          text: 'Quản Lý Số Liệu Marketing Theo Platform',
          to: { name: 'platform-marketing' },
        },
        {
          text: 'Thêm Quản Lý Số Liệu',
          active: true,
        },
      ],
    },
  },
  {
    path: '/platform-marketing/edit/:id',
    name: 'platform-marketing-edit',
    props: true,
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/platform-marketing/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Platform Marketing',
      breadcrumb: [
        {
          text: 'Quản Lý Số Liệu Marketing Theo Platform',
          to: { name: 'platform-marketing' },
        },
        {
          text: 'Sửa Số Liệu',
          active: true,
        },
      ],
    },
  },
  {
    path: '/facebook-invoice',
    name: 'facebook-invoice',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/facebook-invoice/Manage.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Hoá Đơn',
      breadcrumb: [
        {
          text: 'Quản lý Hoá Đơn',
          active: true,
        },
      ],
    },
  },
  {
    path: '/facebook-invoice/create',
    name: 'facebook-invoice-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/facebook-invoice/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Hoá Đơn',
      breadcrumb: [
        {
          text: 'Quản lý Hoá Đơn',
          to: { name: 'facebook-invoice' },
        },
        {
          text: 'Tạo Hoá Đơn',
          active: true,
        },
      ],
    },
  },
  {
    path: '/facebook-invoice/edit/:id',
    name: 'facebook-invoice-edit',
    props: true,
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/facebook-invoice/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Hoá Đơn',
      breadcrumb: [
        {
          text: 'Quản lý Hoá Đơn',
          to: { name: 'facebook-invoice' },
        },
        {
          text: 'Sửa Hoá Đơn',
          active: true,
        },
      ],
    },
  },
  {
    path: '/billing-resource',
    name: 'billing-resource',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/billing-resource/Manage.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Chi phí Tài Nguyên',
      breadcrumb: [
        {
          text: 'Quản Lý Chi phí Tài Nguyên',
          active: true,
        },
      ],
    },
  },
  {
    path: '/billing-resource/create',
    name: 'billing-resource-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/billing-resource/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Chi phí Tài Nguyên',
      breadcrumb: [
        {
          text: 'Quản Lý Chi phí Tài Nguyên',
          to: { name: 'billing-resource' },
        },
        {
          text: 'Quản Lý Chi phí Tài Nguyên',
          active: true,
        },
      ],
    },
  },
  {
    path: '/billing-resource/edit/:id',
    name: 'billing-resource-edit',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/billing-resource/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Chi phí Tài Nguyên',
      breadcrumb: [
        {
          text: 'Quản Lý Chi phí Tài Nguyên',
          to: { name: 'billing-resource' },
        },
        {
          text: 'Sửa Chi phí Tài Nguyên',
          active: true,
        },
      ],
    },
  },
]
