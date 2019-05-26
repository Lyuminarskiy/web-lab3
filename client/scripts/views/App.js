import Navbar from "../components/Navbar.js";


/**
 * Корневой компонент веб-приложения.
 */
const App = {
  /**
   * Название компонента.
   */
  name: "App",

  /**
   * Регистрация локальных компонентов.
   */
  components: {Navbar},

  /**
   * Строковый шаблон компонента.
   */
  template: `
    <div>
      <Navbar></Navbar>
      <router-view></router-view>
    </div>
  `
};

export default App;