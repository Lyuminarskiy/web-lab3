/**
 * Панель навигации.
 */
const Navbar = {
  name: "Navbar",
  template: `
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <router-link to="/product">Продукт</router-link>
      <router-link to="/order">Заказ</router-link>
    </nav>
  `
};

export default Navbar;