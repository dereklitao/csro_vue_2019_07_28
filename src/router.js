import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("./views/0-Dashboard.vue")
    },
    {
      path: "/room",
      name: "room",
      component: () => import("./views/1-Room.vue")
    },
    {
      path: "/scene",
      name: "room",
      component: () => import("./views/2-Scene.vue")
    },
    {
      path: "/airsystem",
      name: "airsystem",
      component: () => import("./views/3-Airsystem.vue")
    },
    {
      path: "/curtain",
      name: "curtain",
      component: () => import("./views/4-Curtain.vue")
    },
    {
      path: "/light",
      name: "light",
      component: () => import("./views/5-Light.vue")
    }
  ]
});
