/**
 * Страница продукта.
 */
const Product = {
  /**
   * Название компонента.
   */
  name: "Product",

  /**
   * Вычисляемые свойства компонента.
   */
  computed: {
    // eslint-disable-next-line no-undef
    ...Vuex.mapState(["data"])
  },

  /**
   * Строковый шаблон компонента.
   */
  template: `
    <div>
      <h1>Страница продукта</h1>
    </div>
  `
};

export default Product;