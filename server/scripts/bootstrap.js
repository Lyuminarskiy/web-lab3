const mongoose = require("mongoose");
const {db: {URL}} = require("./config");
const {
  Product,
  Comment,
  Review,
  User,
  Brand,
  Category,
  Color
} = require("./schemes");


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
const products = require("../database/products");
const comments = require("../database/comments");
const reviews = require("../database/reviews");
const users = require("../database/users");
const brands = require("../database/brands");
const categories = require("../database/categories");
const colors = require("../database/colors");

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
  log(Product.create(products), "Продукты загружены"),
  log(Comment.create(comments), "Комментарии загружены"),
  log(Review.create(reviews), "Отзывы загружены"),
  log(User.create(users), "Пользователи загружены"),
  log(Brand.create(brands), "Бренды загружены"),
  log(Category.create(categories), "Категории загружены"),
  log(Color.create(colors), "Цвета загружены")
]);