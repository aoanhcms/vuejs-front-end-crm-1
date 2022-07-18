export default [
  {
    path: '/classes',
    name: 'classes',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/class/class/Manage.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Lớp Học',
      breadcrumb: [
        {
          text: 'Danh sách Lớp Học',
          active: true,
        },
      ],
    },
  },
  {
    path: '/classes/create',
    name: 'classes-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/class/class/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Lớp Học',
      breadcrumb: [
        {
          text: 'Danh sách Lớp Học',
          to: { name: 'classes' },
        },
        {
          text: 'Tạo lớp học',
          active: true,
        },
      ],
    },
  },
  {
    path: '/classes/edit/:id',
    name: 'classes-edit',
    props: true,
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/class/class/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Lớp Học',
      breadcrumb: [
        {
          text: 'Danh sách Lớp Học',
          to: { name: 'classes' },
        },
        {
          text: 'Sửa Lớp học',
          active: true,
        },
      ],
    },
  },
  {
    path: '/teacher',
    name: 'teacher',
    props: true,
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/class/teacher/Manage.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Giáo Viên',
      breadcrumb: [
        {
          text: 'Danh sách Giáo Viên',
          active: true,
        },
      ],
    },
  },
  {
    path: '/teacher/edit/:id',
    name: 'teacher-edit',
    props: true,
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/class/teacher/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Giáo Viên',
      breadcrumb: [
        {
          text: 'Danh sách Giáo Viên',
          to: { name: 'teacher' },
        },
        {
          text: 'Sửa Giáo Viên',
          active: true,
        },
      ],
    },
  },
  {
    path: '/teacher/create',
    name: 'teacher-create',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/class/teacher/Create.vue'),
    meta: {
      redirectIfLoggedIn: true,
      pageTitle: 'Quản lý Giáo Viên',
      breadcrumb: [
        {
          text: 'Danh sách Giáo Viên',
          to: { name: 'teacher' },
        },
        {
          text: 'Thêm Giáo Viên',
          active: true,
        },
      ],
    },
  },
]
