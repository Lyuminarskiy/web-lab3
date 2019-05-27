/**
 * Страница каталога.
 */
const Catalog = {
  /**
   * Название компонента.
   */
  name: "Catalog",

  /**
   * Вычисляемые свойства компонента.
   */
  computed: {
    // eslint-disable-next-line no-undef
    ...Vuex.mapState(["data"])
  },

  /**
   * Методы компонента.
   */
  methods: {
    // eslint-disable-next-line no-undef
    ...Vuex.mapActions([
      "getProducts"
    ])
  },

  created() {
    this.$store
      .dispatch("getColorProducts", 1)
      .then((data) => console.log(data));

    console.log(this.data);
  },

  /**
   * Строковый шаблон компонента.
   */
  template: `
    <div>
      <h1>Страница каталога</h1>
    </div>
  `
};

export default Catalog;