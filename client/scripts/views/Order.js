/**
 * Страница заказа.
 */
const Order = {
  /**
   * Название компонента.
   */
  name: "Order",

  /**
   * Вычисляемые свойства компонента.
   */
  computed: {
    // eslint-disable-next-line no-undef
    ...Vuex.mapState(["data", "order"])
  },

  /**
   * Методы компонента.
   */
  methods: {
    // eslint-disable-next-line no-undef
    ...Vuex.mapActions([])
  },

  /**
   * Строковый шаблон компонента.
   */
  template: `
    <div>
      <h1>Страница заказа</h1>
    </div>
  `
};

export default Order;