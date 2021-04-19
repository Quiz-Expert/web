module.exports = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import("../views/Home/Homepage"),
  },
  {
    path: '/auth',
    redirect: '/auth/login',
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import("../views/Auth/Login")
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import("../views/Auth/Register")
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      requiresAuth: true,
    },
    redirect: "/user/categories",
    component: () => import("../views/UserInterface/UserPage"),

    children: [
      {
        path: "categories",
        name: 'Categories',
        component: () => import("../components/UserInterface/MainSections/Categories"),
      },
      {
        path: "invitations",
        name: 'Invitations',
        component: () => import("../components/UserInterface/MainSections/Invitations"),
      },
      {
        path: "friends",
        name: 'Friends',
        component: () => import("../components/UserInterface/MainSections/Friends"),
      },
      {
        path: "inviting-to-friends",
        name: 'Inviting-to-friends',
        component: () => import("../components/UserInterface/MainSections/InvitingToFriends"),
      },
      {
        path: "profile",
        name: 'Profile',
        component: () => import("../components/UserInterface/MainSections/Profile"),
      },
      {
        path: "settings",
        name: 'Settings',
        component: () => import("../components/UserInterface/MainSections/Settings"),
      },
    ]
  }
]