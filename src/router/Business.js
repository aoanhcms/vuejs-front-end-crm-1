export default [
  {
    path: '/business',
    name: 'business',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/business/Manage.vue'),
    meta: {
      pageTitle: 'Doanh nghiệp',
      breadcrumb: [
        {
          text: 'Quản lý doanh nghiệp',
          active: true,
        },
      ],
    },
  },
  {
    path: '/business/create',
    name: 'business-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/business/Create.vue'),
    meta: {
      pageTitle: 'Doanh nghiệp',
      breadcrumb: [
        {
          text: 'Quản lý doanh nghiệp',
          to: { name: 'business' },
        },
        {
          text: 'Tạo doanh nghiệp',
          active: true,
        },
      ],
    },
  },
  {
    path: '/business/edit/:id',
    name: 'business-edit',
    props: true,
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/business/Create.vue'),
    meta: {
      pageTitle: 'Doanh nghiệp',
      breadcrumb: [
        {
          text: 'Quản lý doanh nghiệp',
          to: { name: 'business' },
        },
        {
          text: 'Chỉnh Sửa doanh nghiệp',
          active: true,
        },
      ],
    },
  },
]
