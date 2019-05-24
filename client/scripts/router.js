import Home from "./views/Home.js";
import Shop from "./views/Shop.js";
import Product from "./views/Product.js";
import Order from "./views/Order.js";


// eslint-disable-next-line no-undef
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/shop",
      component: Shop
    },
    {
      path: "/product",
      component: Product
    },
    {
      path: "/order",
      component: Order
    }
  ]
});

export default router;