const express = require("express");
const schemes = require("./schemes");
const {http} = require("./constants");

/**
 * Возвращает обработчик запроса из базы данных, который обрабатывает
 * ошибку и в случае успеха вызывает переданную функцию.
 *
 * @param {Request} request - Запрос клиента.
 * @param {Response} response - Ответ сервера.
 * @param {Function} callback - Функция манипуляции результатами запроса.
 * @return {Function} Обработчик запроса.
 */
const handle = (request, response, callback) => (error, data) => {
  if (error) {
    console.log(error);
    response.status(http.INTERNAL_SERVER_ERROR);
  }
  else {
    response.json(callback(data));
  }
};

/**
 * Роутер, обрабатывающий запросы API.
 */
module.exports = new express.Router()
  .get("/color", (request, response) => {
    schemes.Color.find({}, handle(request, response,
      (data) => data.map(({id, name}) => ({id, name}))));
  })
  .get("/color/:id", (request, response) => {
    schemes.Color.findOne({id: request.params.id},
      handle(request, response, ({id, name}) => ({id, name})));
  });