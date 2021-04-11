import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home";
import Index from "@/views/index";
import Product from "@/views/product";
import Detail from "@/views/detail";
import Cart from "@/views/cart";
import Order from "@/views/order";
import OrderList from "@/views/orderList";
import OrderPay from "@/views/orderPay";
import OrderConfirm from "@/views/orderConfirm";
import AliPay from "@/views/alipay";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        component: Index,
      },
      {
        path: "/product/:id",
        component: Product,
      },
      {
        path: "/detail/:id",
        component: Detail,
      },
    ],
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/order",
    component: Order,
    children: [
      {
        path: "list",
        component: OrderList,
      },

      {
        path: "pay",
        component: OrderPay,
      },
      {
        path: "confirm",
        component: OrderConfirm,
      },
      {
        path: "alipay",
        name: "alipay",
        component: AliPay,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
