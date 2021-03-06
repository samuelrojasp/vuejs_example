import Vue from "vue";
import VueRouter from "vue-router";
import Order from "../views/Order.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "*",
    redirect: "/order",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
