export default [
  {
    path: '/users',
    name: 'users',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/user/list/User.vue'),
    meta: {
      pageTitle: 'Khách hàng',
      breadcrumb: [
        {
          text: 'Danh sách khách hàng',
          active: true,
        },
      ],
    },
  },
  {
    path: '/users/create',
    name: 'users-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/user/list/EditUser.vue'),
    meta: {
      pageTitle: 'Khách hàng',
      breadcrumb: [
        {
          text: 'Danh sách khách hàng',
          to: { name: 'users' },
        },
        {
          text: 'Tạo mới người dùng',
          active: true,
        },
      ],
    },
  },
  {
    path: '/users/edit/:id',
    name: 'users-edit',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/user/list/EditUser.vue'),
    props: true,
    meta: {
      pageTitle: 'Khách hàng',
      breadcrumb: [
        {
          text: 'Danh sách khách hàng',
          to: { name: 'users' },
        },
        {
          text: 'Chỉnh sửa',
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
      pageTitle: 'Nhóm Khách hàng',
      breadcrumb: [
        {
          text: 'Nhóm khách hàng',
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
      pageTitle: 'Nhóm Khách hàng',
      breadcrumb: [
        {
          text: 'Danh sách Nhóm Khách Hàng',
          to: {name: 'users-group' }
        },
        {
          text: 'Tạo Nhóm Mới',
          active: true,
        },
      ],
    },
  },
  {
    path: '/users/group/edit/:id',
    name: 'users-group-edit',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/user/group/Edit.vue'),
    meta: {
      pageTitle: 'Nhóm Khách hàng',
      breadcrumb: [
        {
          text: 'Danh sách Nhóm Khách Hàng',
          to: { name: 'users-group'},
        },
        {
          text: 'Chỉnh sửa',
          active: true,
        },
      ],
    },
  },
]
