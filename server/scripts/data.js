const schemes = require("./schemes");
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

module.exports = {
  colors: {
    /**
     * Отправляет клиенту все цвета.
     *
     * @param {*} request - Объект запроса клиента.
     * @param {*} response - Объект ответа сервера.
     */
    all(request, response) {
      schemes.Color.find({}, ...handle(response));
    },

    /**
     * Отправляет клиенту цвет по его идентификатору.
     *
     * @param {*} request - Объект запроса клиента.
     * @param {*} response - Объект ответа сервера.
     */
    byId(request, response) {
      const {id} = request.params;
      schemes.Color.findOne({id}, ...handle(response));
    },

    /**
     * Отправляет клиенту все продукты указанного по идентификатору цвета.
     *
     * @param {*} request - Объект запроса клиента.
     * @param {*} response - Объект ответа сервера.
     */
    products(request, response) {
      const {id} = request.params;
      schemes.Product.find({color: id}, ...handle(response));
    }
  }
};