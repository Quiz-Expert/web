module.exports = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import("../views/Home/Homepage"),
  },
  {
    path: '/auth/login',
    name: 'LoginPage',
    component: () => import("../views/Auth/LoginPage")
  },
  {
    path: '/auth/register',
    name: 'RegisterPage',
    component: () => import("../views/Auth/RegisterPage")
  },
  {
    path: '/user',
    name: 'User',
    redirect: "/user/categories",
    component: () => import("../views/UserInterface/UserPage"),

    children: [
      {
        path: "categories",
        component: () => import("../components/UserInterface/MainSections/Categories"),
      },
      {
        path: "invitations",
        component: () => import("../components/UserInterface/MainSections/Invitations"),
      },
      {
        path: "friends",
        component: () => import("../components/UserInterface/MainSections/Friends"),
      },
      {
        path: "inviting-to-friends",
        component: () => import("../components/UserInterface/MainSections/InvitingToFriends"),
      },
      {
        path: "profile",
        component: () => import("../components/UserInterface/MainSections/Profile"),
      },
      {
        path: "settings",
        component: () => import("../components/UserInterface/MainSections/Settings"),
      },
    ]
  }
]