export default [
  {
    path: '/report-revenue',
    name: 'report-revenue',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/report/revenue.vue'),
    meta: {
      pageTitle: 'Quản lý Báo Cáo Doanh Số',
      breadcrumb: [
        {
          text: 'Báo Cáo Doanh Số',
          active: true,
        },
      ],
    },
  },
  {
    path: '/report-class',
    name: 'report-class',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/report/class.vue'),
    meta: {
      pageTitle: 'Quản lý Báo Cáo Q.Lý Lớp',
      breadcrumb: [
        {
          text: 'Báo Cáo Q.Lý Lớp',
          active: true,
        },
      ],
    },
  },
  {
    path: '/report-sale',
    name: 'report-sale',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/report/sale.vue'),
    meta: {
      pageTitle: 'Quản lý Báo Cáo CarePage',
      breadcrumb: [
        {
          text: 'Báo Cáo CarePage',
          active: true,
        },
      ],
    },
  },
  {
    path: '/report-marketing',
    name: 'report-marketing',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/report/marketing.vue'),
    meta: {
      pageTitle: 'Quản lý Báo Cáo Marketing',
      breadcrumb: [
        {
          text: 'Báo Cáo Marketing',
          active: true,
        },
      ],
    },
  },
  {
    path: '/report-teacher',
    name: 'report-teacher',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/report/teacher.vue'),
    meta: {
      pageTitle: 'Quản lý Báo Cáo Teacher',
      breadcrumb: [
        {
          text: 'Báo Cáo Teacher',
          active: true,
        },
      ],
    },
  },
  {
    path: '/report',
    name: 'report',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/report/report.vue'),
    meta: {
      pageTitle: 'Quản lý Báo Cáo Report',
      breadcrumb: [
        {
          text: 'Báo Cáo Report',
          active: true,
        },
      ],
    },
  },
]
