export const subRoutes = [
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/404/404.vue"),
    meta: {
      title: "fourOFour",
    },
  },
];
