import { auth } from "./auth";
import { mainRoutes } from "./mainRoutes.js";
import { subRoutes } from "./subRoutes.js";

/**
 * SEPARATE LAYOUT ACCORDING TO ROUTES
 */
export const routes = [
  {
    path: '/',
    component: () => import("@/layout/MainLayout.vue"),
    children: [...mainRoutes],
    redirect: '/home',
  },

  {
    path: '/subLayout',
    component: () => import("@/layout/SubLayout.vue"),
    children: [...auth, ...subRoutes],
  },
];
