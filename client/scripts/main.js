import App from "./App.js";
import router from "./router.js";
import store from "./store.js";


const client = new Vue({
  el: "#app",
  router,
  store,
  render: (createElement) => createElement(App)
});