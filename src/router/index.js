import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./modules/routes";
import i18n from "../locales/i18n";

/**
 * ALL ROUTES
 */
const constantRoutes = [
  ...routes,
  {
    path: "/:patchAll(\\S+)",
    redirect: "/404",
  },
];

/**
 * CREATE ROUTER
 */
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

/**
 * CHECK BEFORE GO TO NEW ROUTE
 */
const whiteList = ["/login", "/register"];

router.beforeEach((to, form, next) => {
  if (to.meta && to.meta.title) {
    document.title = i18n.global.t(`pages.${to.meta.title}`);
  }
  
  next();

  /**
   * CHECK TOKENS IF YOU NEED
   */
  // let accessToken =
  //   typeof Cookies.get("access_token") != "undefined"
  //     ? Cookies.get("timer_access")
  //     : false;

  // /**
  //  * IF ACCESS TOKEN EXIST YOU CANNOT GO TO WHITE LIST ROUTE
  //  */
  // if (accessToken) {
  //   if (whiteList.includes(to.path)) {
  //     next(from.path);
  //     return;
  //   }
  // }

  // /**
  //  * ACCESS TOKEN DIDN'T EXIST AND TO-ROUTE IS NOT IN WHITE LIST REDIRECT TO LOGIN
  //  * OTHERWISE GO TO  TO-ROUTE
  //  */
  // if (
  //   !accessToken &&
  //   (to.meta.title !== "login" || to.meta.title !== "register")
  // ) {
  //   /**
  //    * REMOVE THING LIKE LOGOUT
  //    */
  //   router.push({ name: "login", query: { redirect: to.path } });
  //   return;
  // } else {
  //   next();
  // }
  
});

export default router;
