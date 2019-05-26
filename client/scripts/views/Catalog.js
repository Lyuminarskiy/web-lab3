/**
 * Страница каталога.
 */
const Catalog = {
  name: "Catalog",

  created() {
    this.$store
      .dispatch("getColorProducts", 1)
      .then((data) => console.log(data));
  },

  template: `
    <div>
      <h1>Страница каталога</h1>
    </div>
  `
};

export default Catalog;