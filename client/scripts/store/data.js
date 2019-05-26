/**
 * Добавляет новый объект в модуль данных.
 *
 * @param {Object} items - Состояние модуля данных.
 * @param {Object} newItem - Добавляемый объект.
 */
const addItem = (items, newItem) => {
  /**
   * Количество добавляемых объектов.
   */
  const amount = 1;

  // Если объект уже есть в модуле - обновляем его.
  if (items.some((item) => item.id === newItem.id)) {
    const indexOfColor = items
      .map((color) => color.id)
      .indexOf(newItem.id);

    items.splice(indexOfColor, amount, newItem);
  }
  // Если объекта в модуле нет - добавляем его.
  else {
    items.splice(items.length, amount, newItem);
  }
};

/**
 * Выполняет GET-запрос по указанному адресу. После запроса выполняет
 * указанное действие модуля.
 *
 * @param {Object} context - Контекст действия.
 * @param {string} action - Действие модуля, выполняемое после запроса.
 * @param {string} url - Адрес, по которому необходимо выполнить запрос.
 * @return {Promise} Обещание выполнения операции.
 */
const get = ({dispatch}, action, url) => fetch(url)
  .then((response) => response.json())
  .then((data) => {
    dispatch(action, data);
    return data;
  });

/**
 * Модуль данных хранилища веб-приложения.
 */
const data = {
  /**
   * Локальное состояние модуля данных.
   */
  state: {
    /**
     * Продукты.
     */
    products: [],

    /**
     * Комментарии.
     */
    comments: [],

    /**
     * Отзывы.
     */
    reviews: [],

    /**
     * Пользователи.
     */
    users: [],

    /**
     * Бренды.
     */
    brands: [],

    /**
   * Категории.
   */
    categories: [],

    /**
     * Цвета.
     */
    colors: []
  },

  /**
   * Мутации модуля данных.
   */
  mutations: {
    /**
     * Добавляет новый продукт.
     *
     * @param {Object} state - Состояние модуля данных.
     * @param {Object} product - Добавляемый продукт.
     */
    addProduct: ({products}, product) => addItem(products, product),

    /**
     * Добавляет новый комментарий.
     *
     * @param {Object} state - Состояние модуля данных.
     * @param {Object} comment - Добавляемый комментарий.
     */
    addComment: ({comments}, comment) => addItem(comments, comment),

    /**
     * Добавляет новый отзыв.
     *
     * @param {Object} state - Состояние модуля данных.
     * @param {Object} review - Добавляемый отзыв.
     */
    addReview: ({reviews}, review) => addItem(reviews, review),

    /**
     * Добавляет нового пользователя.
     *
     * @param {Object} state - Состояние модуля данных.
     * @param {Object} user - Добавляемый пользователь.
     */
    addUser: ({users}, user) => addItem(users, user),

    /**
     * Добавляет новый бренд.
     *
     * @param {Object} state - Состояние модуля данных.
     * @param {Object} brand - Добавляемый бренд.
     */
    addBrand: ({brands}, brand) => addItem(brands, brand),

    /**
     * Добавляет новую категорию.
     *
     * @param {Object} state - Состояние модуля данных.
     * @param {Object} category - Добавляемая категория.
     */
    addCategory: ({categories}, category) => addItem(categories, category),

    /**
     * Добавляет новый цвет.
     *
     * @param {Object} state - Состояние модуля данных.
     * @param {Object} color - Добавляемый цвет.
     */
    addColor: ({colors}, color) => addItem(colors, color)
  },

  /**
   * Действия модуля данных.
   */
  actions: {
    // Продукты.

    /**
     * Добавляет новый продукт.
     *
     * @param {Object} context - Контекст действия.
     * @param {Object} product - Добавляемый продукт.
     */
    addProduct: ({commit}, product) => commit("addProduct", product),

    /**
     * Добавляет новые продукты.
     *
     * @param {Object} context - Контекст действия.
     * @param {Array} products - Добавляемые продукты.
     */
    addProducts: ({dispatch}, products) => products
      .forEach((product) => dispatch("addProduct", product)),

    /**
     * Загружает с сервера все продукты.
     *
     * @param {Object} context - Контекст действия.
     * @return {Promise} Обещание выполнения операции.
     */
    getProducts: (context) => get(context, "addProducts", "api/products"),

    /**
     * Загружает с сервера продукт по его идентификатору.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор продукта.
     * @return {Promise} Обещание выполнения операции.
     */
    getProduct: (context, id) => get(context, "addProduct",
      `api/product/${id}`),

    /**
     * Загружает с сервера категорию указанного по идентификатору продукта.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор продукта.
     * @return {Promise} Обещание выполнения операции.
     */
    getProductCategory: (context, id) => get(context, "addCategory",
      `api/product/${id}/category`),

    /**
     * Загружает с сервера бренд указанного по идентификатору продукта.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор продукта.
     * @return {Promise} Обещание выполнения операции.
     */
    getProductBrand: (context, id) => get(context, "addBrand",
      `api/product/${id}/brand`),

    /**
     * Загружает с сервера цвет указанного по идентификатору продукта.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор продукта.
     * @return {Promise} Обещание выполнения операции.
     */
    getProductColor: (context, id) => get(context, "addColor",
      `api/product/${id}/color`),

    /**
     * Загружает с сервера все комментарии к указанному
     * по идентификатору продукту.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор продукта.
     * @return {Promise} Обещание выполнения операции.
     */
    getProductComments: (context, id) => get(context, "addComments",
      `api/product/${id}/comments`),

    /**
     * Загружает с сервера все отзывы к указанному по идентификатору продукту.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор продукта.
     * @return {Promise} Обещание выполнения операции.
     */
    getProductReviews: (context, id) => get(context, "addReviews",
      `api/product/${id}/reviews`),


    // Комментарии.

    /**
     * Добавляет новый комментарий.
     *
     * @param {Object} context - Контекст действия.
     * @param {Object} comment - Добавляемый комментарий.
     */
    addComment: ({commit}, comment) => commit("addComment", comment),

    /**
     * Добавляет новые комментарии.
     *
     * @param {Object} context - Контекст действия.
     * @param {Array} comments - Добавляемые комментарии.
     */
    addComments: ({dispatch}, comments) => comments
      .forEach((comment) => dispatch("addComment", comment)),

    /**
     * Загружает с сервера все комментарии.
     *
     * @param {Object} context - Контекст действия.
     * @return {Promise} Обещание выполнения операции.
     */
    getComments: (context) => get(context, "addComments", "api/comments"),

    /**
     * Загружает с сервера комментарий по его идентификатору.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор комментария.
     * @return {Promise} Обещание выполнения операции.
     */
    getComment: (context, id) => get(context, "addComment",
      `api/comment/${id}`),

    /**
     * Загружает с сервера продукт, для которого был написан указанный
     * по идентификатору комментарий.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор комментария.
     * @return {Promise} Обещание выполнения операции.
     */
    getCommentProduct: (context, id) => get(context, "addProduct",
      `api/comment/${id}/product`),

    /**
     * Загружает с сервера автора указанного по идентификатору комментария.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор комментария.
     * @return {Promise} Обещание выполнения операции.
     */
    getCommentAuthor: (context, id) => get(context, "addUser",
      `api/comment/${id}/author`),

    /**
     * Загружает с сервера все ответы на комментарий с указанным
     * идентификатором.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор комментария.
     * @return {Promise} Обещание выполнения операции.
     */
    getCommentReplies: (context, id) => get(context, "addComments",
      `api/comment/${id}/replies`),


    // Отзывы.

    /**
     * Добавляет новый отзыв.
     *
     * @param {Object} context - Контекст действия.
     * @param {Object} review - Добавляемый отзыв.
     */
    addReview: ({commit}, review) => commit("addReview", review),

    /**
     * Добавляет новые отзывы.
     *
     * @param {Object} context - Контекст действия.
     * @param {Array} reviews - Добавляемые отзывы.
     */
    addReviews: ({dispatch}, reviews) => reviews
      .forEach((review) => dispatch("addReview", review)),

    /**
     * Загружает с сервера все отзывы.
     *
     * @param {Object} context - Контекст действия.
     * @return {Promise} Обещание выполнения операции.
     */
    getReviews: (context) => get(context, "addReviews", "api/reviews"),

    /**
     * Загружает с сервера отзыв по его идентификатору.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор отзыва.
     * @return {Promise} Обещание выполнения операции.
     */
    getReview: (context, id) => get(context, "addReview", `api/review/${id}`),

    /**
     * Загружает с сервера продукт, на который был написан указанный
     * по идентификатору отзыв.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор отзыва.
     * @return {Promise} Обещание выполнения операции.
     */
    getReviewProduct: (context, id) => get(context, "addProduct",
      `api/review/${id}/product`),

    /**
     * Загружает с сервера автора указанного по идентификатору отзыва.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор отзыва.
     * @return {Promise} Обещание выполнения операции.
     */
    getReviewAuthor: (context, id) => get(context, "addUser",
      `api/review/${id}/author`),


    // Пользователя.

    /**
     * Добавляет нового пользователя.
     *
     * @param {Object} context - Контекст действия.
     * @param {Object} user - Добавляемый пользователь.
     */
    addUser: ({commit}, user) => commit("addUser", user),

    /**
     * Добавляет новых пользователей.
     *
     * @param {Object} context - Контекст действия.
     * @param {Array} users - Добавляемые пользователи.
     */
    addUsers: ({dispatch}, users) => users
      .forEach((user) => dispatch("addUser", user)),

    /**
     * Загружает с сервера всех пользователей.
     *
     * @param {Object} context - Контекст действия.
     * @return {Promise} Обещание выполнения операции.
     */
    getUsers: (context) => get(context, "addUsers", "api/users"),

    /**
     * Загружает с сервера пользователя по его идентификатору.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор пользователя.
     * @return {Promise} Обещание выполнения операции.
     */
    getUser: (context, id) => get(context, "addUser", `api/user/${id}`),

    /**
     * Загружает с сервера все комментарии указанного по идентификатору
     * пользователя.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор пользователя.
     * @return {Promise} Обещание выполнения операции.
     */
    getUserComments: (context, id) => get(context, "addComments",
      `api/user/${id}/comments`),

    /**
     * Загружает с сервера все отзывы указанного по идентификатору
     * пользователя.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор пользователя.
     * @return {Promise} Обещание выполнения операции.
     */
    getUserReviews: (context, id) => get(context, "addReview",
      `api/user/${id}/reviews`),


    // Бренды.

    /**
     * Добавляет новый бренд.
     *
     * @param {Object} context - Контекст действия.
     * @param {Object} brand - Добавляемый бренд.
     */
    addBrand: ({commit}, brand) => commit("addBrand", brand),

    /**
     * Добавляет новые бренды.
     *
     * @param {Object} context - Контекст действия.
     * @param {Array} brands - Добавляемые бренды.
     */
    addBrands: ({dispatch}, brands) => brands
      .forEach((brand) => dispatch("addBrand", brand)),

    /**
     * Загружает с сервера все бренды.
     *
     * @param {Object} context - Контекст действия.
     * @return {Promise} Обещание выполнения операции.
     */
    getBrands: (context) => get(context, "addBrands", "api/brands"),

    /**
     * Загружает с сервера бренд по его идентификатору.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор бренда.
     * @return {Promise} Обещание выполнения операции.
     */
    getBrand: (context, id) => get(context, "addBrand", `api/brand/${id}`),

    /**
     * Загружает с сервера все продукты указанного по идентификатору бренда.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор бренда.
     * @return {Promise} Обещание выполнения операции.
     */
    getBrandProducts: (context, id) => get(context, "addProducts",
      `api/brand/${id}/products`),


    // Категории.

    /**
     * Добавляет новую категорию.
     *
     * @param {Object} context - Контекст действия.
     * @param {Object} category - Добавляемая категория.
     */
    addCategory: ({commit}, category) => commit("addCategory", category),

    /**
     * Добавляет новые бренды.
     *
     * @param {Object} context - Контекст действия.
     * @param {Array} categories - Добавляемые категории.
     */
    addCategories: ({dispatch}, categories) => categories
      .forEach((category) => dispatch("addCategory", category)),

    /**
     * Загружает с сервера все бренды.
     *
     * @param {Object} context - Контекст действия.
     * @return {Promise} Обещание выполнения операции.
     */
    getCategories: (context) => get(context, "addCategories", "api/categories"),

    /**
     * Загружает с сервера бренд по его идентификатору.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор категории.
     * @return {Promise} Обещание выполнения операции.
     */
    getCategory: (context, id) => get(context, "addCategory",
      `api/category/${id}`),

    /**
     * Загружает с сервера все продукты указанного по идентификатору бренда.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор категории.
     * @return {Promise} Обещание выполнения операции.
     */
    getCategoryProducts: (context, id) => get(context, "addProducts",
      `api/category/${id}/products`),


    // Цвета.

    /**
     * Добавляет новый цвет.
     *
     * @param {Object} context - Контекст действия.
     * @param {Object} color - Добавляемый цвет.
     */
    addColor: ({commit}, color) => commit("addColor", color),

    /**
     * Добавляет новые цвета.
     *
     * @param {Object} context - Контекст действия.
     * @param {Array} colors - Добавляемые цвета.
     */
    addColors: ({dispatch}, colors) => colors
      .forEach((color) => dispatch("addColor", color)),

    /**
     * Загружает с сервера все цвета.
     *
     * @param {Object} context - Контекст действия.
     * @return {Promise} Обещание выполнения операции.
     */
    getColors: (context) => get(context, "addColors", "api/colors"),

    /**
     * Загружает с сервера цвет по его идентификатору.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор цвета.
     * @return {Promise} Обещание выполнения операции.
     */
    getColor: (context, id) => get(context, "addColor", `api/color/${id}`),

    /**
     * Загружает с сервера все продукты указанного по идентификатору цвета.
     *
     * @param {Object} context - Контекст действия.
     * @param {number} id - Идентификатор цвета.
     * @return {Promise} Обещание выполнения операции.
     */
    getColorProducts: (context, id) => get(context, "addProducts",
      `api/color/${id}/products`)
  }
};

export default data;