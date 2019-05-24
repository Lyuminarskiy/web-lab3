const mongoose = require("mongoose");
const schemes = require("./schemes");


// Имя базы данных.
const DATABASE_NAME = "shop";

// Порт базы данных по умолчанию.
const DATABASE_PORT = 27017;

// Адрес базы данных.
const DATABASE_URL = `mongodb://localhost:${DATABASE_PORT}/${DATABASE_NAME}`;

/**
 * Возвращает обработчик запроса из базы данных, который обрабатывает ошибку
 * и в случае успеха выводит в консоль сервера указанное сообщение.
 *
 * @param {String} message - Сообщение при отсутствии ошибки.
 * @return {Function} Обработчик запроса.
 */
const log = (message) => (error) => error
  ? console.log(error)
  : console.log(`${Date()} | ${message}`);

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
module.exports = () => {
  // Подключаем базу данных.
  mongoose.connect(DATABASE_URL, {useNewUrlParser: true},
    log("База данных подключена"));

  // Сбрасываем базу данных, чтобы затем загрузить свежие данные.
  mongoose.connection.dropDatabase(log("База данных сброшена"));

  // Загружаем свежие данные в базу данных.
  schemes.Product.create(products, log("Продукты загружены"));
  schemes.Comment.create(comments, log("Комментарии загружены"));
  schemes.Review.create(reviews, log("Отзывы загружены"));
  schemes.User.create(users, log("Пользователи загружены"));
  schemes.Brand.create(brands, log("Бренды загружены"));
  schemes.Category.create(categories, log("Категории загружены"));
  schemes.Color.create(colors, log("Цвета загружены"));
};