import data from "./data.js";
import order from "./order.js";


/**
 * Хранилище состояния веб-приложения.
 */
// eslint-disable-next-line no-undef
const store = new Vuex.Store({
  modules: {
    data,
    order
  }
});

export default store;