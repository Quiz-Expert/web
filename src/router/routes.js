import Homepage from "../views/Home/Homepage"
import Login from "../views/Auth/Login"
import Register from "../views/Auth/Register"
import UserInterface from "../views/UserInterface/UserPage"
import Categories from "../components/UserInterface/MainSections/Categories"
import Invitations from "../components/UserInterface/MainSections/Invitations"
import Friends from "../components/UserInterface/MainSections/Friends"
import InvitingToFriends from "../components/UserInterface/MainSections/InvitingToFriends"
import Profile from "../components/UserInterface/MainSections/Profile"
import Settings from "../components/UserInterface/MainSections/Settings"
import GameModeSelection from "../views/Game/ModeSelection"
import Dashboard from "../views/Dashboard/Dashboard"
import Overview from "../components/Dashboard/MainSections/Overview"
import CategoriesPanel from "../components/Dashboard/MainSections/Categories"
import QuestionsPanel from "../components/Dashboard/MainSections/Questions"
import SuggestionsPanel from "../components/Dashboard/MainSections/Suggestions"
import UsersPanel from "../components/Dashboard/MainSections/Users"
import AdminNotifications from "../components/Dashboard/MainSections/Notifications"
import NotFound from "../views/NotFound";

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/auth',
    redirect: '/auth/login',
  },
  {
    path: '/auth/login',
    name: 'Login',
    meta: {
      isAuthenticated: true,
    },
    component: Login,
  },
  {
    path: '/auth/register',
    name: 'Register',
    meta: {
      isAuthenticated: true,
    },
    component: Register,
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      requiresAuth: true,
    },
    redirect: "/user/categories",
    component: UserInterface,

    children: [
      {
        path: "categories",
        name: 'Categories',
        component: Categories,
      },
      {
        path: "invitations",
        name: 'Invitations',
        component: Invitations,
      },
      {
        path: "friends",
        name: 'Friends',
        component: Friends,
      },
      {
        path: "inviting-to-friends",
        name: 'Inviting-to-friends',
        component: InvitingToFriends,
      },
      {
        path: "profile",
        name: 'Profile',
        component: Profile,
      },
      {
        path: "settings",
        name: 'Settings',
        component: Settings,
      },
    ]
  },
  {
    path: '/game/mode-selection',
    name: 'GameModeSelection',
    component: GameModeSelection,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
      onlyAdmin: true,
    },
    redirect: "/dashboard/overview",
    component: Dashboard,
    children: [
      {
        path: "overview",
        name: 'Overview',
        component: Overview,
      },
      {
        path: "categories",
        name: 'Categories-panel',
        component: CategoriesPanel,
      },
      {
        path: "questions",
        name: 'Questions-panel',
        component: QuestionsPanel,
      },
      {
        path: "suggestions",
        name: 'Suggestions-panel',
        component: SuggestionsPanel,
      },
      {
        path: "users",
        name: 'Users-panel',
        component: UsersPanel,
      },
      {
        path: "notifications",
        name: "Admin-Notifications",
        component: AdminNotifications,
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not-found',
    component: NotFound,
  },
];

export default routes;