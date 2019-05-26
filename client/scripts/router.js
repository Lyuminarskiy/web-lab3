import Home from "./views/Home.js";
import Catalog from "./views/Catalog.js";
import Product from "./views/Product.js";
import Order from "./views/Order.js";


/**
 * Роутер веб-приложения.
 */
// eslint-disable-next-line no-undef
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/catalog",
      component: Catalog
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