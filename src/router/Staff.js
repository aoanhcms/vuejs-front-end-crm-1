export default [
  {
    path: '/staffs',
    name: 'staffs',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/staffs/Manage.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Nhân Viên',
      breadcrumb: [
        {
          text: 'Danh sách nhân Viên',
          active: true,
        },
      ],
    },
  },
  {
    path: '/staffs/create',
    name: 'staffs-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/staffs/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Nhân Viên',
      breadcrumb: [
        {
          text: 'Danh sách nhân Viên',
          to: { name: 'staffs' },
        },
        {
          text: 'Tạo thêm nhân viên',
          active: true,
        },
      ],
    },
  },
  {
    path: '/staffs/edit/:id',
    name: 'staffs-edit',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/staffs/Create.vue'),
    props: true,
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Nhân Viên',
      breadcrumb: [
        {
          text: 'Danh sách nhân viên',
          to: { name: 'staffs' },
        },
        {
          text: 'Chỉnh sửa',
          active: true,
        },
      ],
    },
  },
  {
    path: '/groups',
    name: 'groups',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/group/Manage.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Nhóm',
      breadcrumb: [
        {
          text: 'Group',
          active: true,
        },
      ],
    },
  },
  {
    path: '/groups/create',
    name: 'groups-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/group/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lýNhóm',
      breadcrumb: [
        {
          text: 'Danh sách Group',
          to: { name: 'groups' },
        },
        {
          text: 'Tạo Nhóm Mới',
          active: true,
        },
      ],
    },
  },
  {
    path: '/groups/edit/:id',
    name: 'groups-edit',
    props: true,
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/group/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Nhóm',
      breadcrumb: [
        {
          text: 'Danh sách Nhóm',
          to: { name: 'groups' },
        },
        {
          text: 'Sửa Nhóm',
          active: true,
        },
      ],
    },
  },
]
