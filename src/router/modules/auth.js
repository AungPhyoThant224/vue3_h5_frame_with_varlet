/**
 * AUTHENTICATION ROUTES
 */
export const auth = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
    meta: {
      title: "login",
      layout: "admin",
    },
  },
];
