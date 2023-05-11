/**
 * MAIN ROUTES
 */
export const mainRoutes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
    meta: {
      title: "home",
      layout: "admin",
      icon: "home"
    },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search/Search.vue"),
    meta: {
      title: "search",
      layout: "admin",
      icon: "magnify"
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Login/Login.vue"),
    meta: {
      title: "profile",
      layout: "admin",
      icon: "account-circle"
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/Home/Home.vue"),
    meta: {
      title: "menu",
      layout: "admin",
      icon: "menu"
    },
  },
];
