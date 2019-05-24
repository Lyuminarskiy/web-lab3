import App from "./App.js";
import router from "./router.js";
import store from "./store.js";


// eslint-disable-next-line no-unused-vars, no-undef
const client = new Vue({
  el: "#app",
  router,
  store,
  render: (createElement) => createElement(App)
});