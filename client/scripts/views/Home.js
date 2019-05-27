/**
 * Главная страница.
 */
const Home = {
  /**
   * Название компонента.
   */
  name: "Home",

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
      <h1>Главная страница</h1>
    </div>
  `
};

export default Home;