const mongoose = require("mongoose");
const schemes = require("./schemes");
const {db: {URL}} = require("./config");


/**
 * Обрабатывает объект обещания. В случае успеха выводит переданное сообщение.
 * В случае ошибки выводит сообщение об ошибке.
 *
 * @param {Promise} promise - Обещание.
 * @param {string} message - Сообщение об успехе обещания.
 */
const log = (promise, message) => promise
  .then(() => console.log(`${Date()} | ${message}`))
  .catch((error) => console.log(error));

// Синхронно загружаем данные из файлов JSON при импорте модуля.
const products = require("../data/products");
const comments = require("../data/comments");
const reviews = require("../data/reviews");
const users = require("../data/users");
const brands = require("../data/brands");
const categories = require("../data/categories");
const colors = require("../data/colors");

/**
 * Обновляет содержимое базы данных.
 */
module.exports = () => Promise.all([
  // Подключаем базу данных.
  log(mongoose.connect(URL, {useNewUrlParser: true}),
    "База данных подключена"),

  // Сбрасываем базу данных, чтобы затем загрузить свежие данные.
  log(mongoose.connection.dropDatabase(), "База данных сброшена"),

  // Загружаем свежие данные в базу данных.
  log(schemes.Product.create(products), "Продукты загружены"),
  log(schemes.Comment.create(comments), "Комментарии загружены"),
  log(schemes.Review.create(reviews), "Отзывы загружены"),
  log(schemes.User.create(users), "Пользователи загружены"),
  log(schemes.Brand.create(brands), "Бренды загружены"),
  log(schemes.Category.create(categories), "Категории загружены"),
  log(schemes.Color.create(colors), "Цвета загружены")
]);