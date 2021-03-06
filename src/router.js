import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("./views/Portfolio.vue")
    },
    {
      path: "/styles",
      name: "styles",
      component: () => import("./views/Styles.vue")
    },
    {
      path: "/reviews",
      name: "reviews",
      component: () => import("./views/Reviews.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/cv",
      name: "cv",
      component: () => import("./views/CV.vue")
    }
  ]
});
