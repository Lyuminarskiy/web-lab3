const {
  Product,
  Comment,
  Review,
  User,
  Brand,
  Category,
  Color
} = require("./schemes");
const {http} = require("./constants");


/**
 * Возвращает массив параметров для функций запроса базы данных.
 *
 * @param {Response} response - Объект ответа сервера.
 * @return {Array} Массив параметров.
 */
const handle = (response) => [
  // Настройка, убирающая из результата запроса служебные данные.
  {_id: 0, __v: 0},

  // Обрабатывает результат запроса из базы данных.
  (error, data) => {
    if (error) {
      console.log(error);
      response.status(http.INTERNAL_SERVER_ERROR);
    }
    else {
      response.json(data);
    }
  }
];

// Реализуйте все приведённые ниже методы.
module.exports = {
  /**
   * Продукты.
   */
  products: {
    /**
     * Отправляет клиенту все продукты.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     */
    all(request, response) { /* ... */ },

    /**
     * Отправляет клиенту продукт по его идентификатору.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор продукта.
     */
    byId(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту категорию указанного по идентификатору продукта.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор продукта.
     */
    category(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту бренд указанного по идентификатору продукта.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор продукта.
     */
    brand(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту цвет указанного по идентификатору продукта.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор продукта.
     */
    color(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту все комментарии к указанному
     * по идентификатору продукту.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор продукта.
     */
    comments(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту все отзывы к указанному по идентификатору продукту.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор продукта.
     */
    reviews(request, response, id) { /* ... */ }
  },

  /**
   * Комментарии.
   */
  comments: {
    /**
     * Отправляет клиенту все комментарии.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     */
    all(request, response) { /* ... */ },

    /**
     * Отправляет клиенту комментарий по его идентификатору.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор комментария.
     */
    byId(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту продукт, для который был написан указанный
     * по идентификатору комментарий.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор комментария.
     */
    product(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту автора указанного по идентификатору комментария.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор комментария.
     */
    author(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту все ответы на комментарий с указанным идентификатором.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор комментария.
     */
    replies(request, response, id) { /* ... */ }
  },

  /**
   * Отзывы.
   */
  reviews: {
    /**
     * Отправляет клиенту все отзывы.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     */
    all(request, response) { /* ... */ },

    /**
     * Отправляет клиенту отзыв по его идентификатору.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор отзыва.
     */
    byId(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту продукт, на который был написан указанный
     * по идентификатору отзыв.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор отзыва.
     */
    product(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту автора указанного по идентификатору отзыва.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор отзыва.
     */
    author(request, response, id) { /* ... */ }
  },

  /**
   * Пользователи.
   */
  users: {
    /**
     * Отправляет клиенту всех пользователей.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     */
    all(request, response) { /* ... */ },

    /**
     * Отправляет клиенту пользователя по его идентификатору.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор пользователя.
     */
    byId(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту все комментарии указанного по идентификатору
     * пользователя.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор пользователя.
     */
    comments(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту все отзывы указанного по идентификатору
     * пользователя.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор пользователя.
     */
    reviews(request, response, id) { /* ... */ }
  },

  /**
   * Бренды.
   */
  brands: {
    /**
     * Отправляет клиенту все бренды.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     */
    all(request, response) { /* ... */ },

    /**
     * Отправляет клиенту бренд по его идентификатору.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор бренда.
     */
    byId(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту все продукты указанного по идентификатору бренда.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор бренда.
     */
    products(request, response, id) { /* ... */ }
  },

  /**
   * Категории.
   */
  categories: {
    /**
     * Отправляет клиенту все категории.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     */
    all(request, response) { /* ... */ },

    /**
     * Отправляет клиенту категорию по её идентификатору.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор категории.
     */
    byId(request, response, id) { /* ... */ },

    /**
     * Отправляет клиенту все продукты указанной по идентификатору категории.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор категории.
     */
    products(request, response, id) { /* ... */ }
  },

  /**
   * Цвета.
   */
  colors: {
    /**
     * Отправляет клиенту все цвета.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     */
    all(request, response) {
      Color.find({}, ...handle(response));
    },

    /**
     * Отправляет клиенту цвет по его идентификатору.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор цвета.
     */
    byId(request, response, id) {
      Color.findOne({id}, ...handle(response));
    },

    /**
     * Отправляет клиенту все продукты указанного по идентификатору цвета.
     *
     * @param {Request} request - Объект запроса клиента.
     * @param {Response} response - Объект ответа сервера.
     * @param {number} id - Идентификатор цвета.
     */
    products(request, response, id) {
      Product.find({color: id}, ...handle(response));
    }
  }
};