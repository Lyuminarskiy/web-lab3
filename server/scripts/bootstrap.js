const mongoose = require("mongoose");
const schemes = require("./schemes");


// Имя базы данных.
const DATABASE_NAME = "shop";

// Порт базы данных по умолчанию.
const DATABASE_PORT = 27017;

// Адрес базы данных.
const DATABASE_URL = `mongodb://localhost:${DATABASE_PORT}/${DATABASE_NAME}`;

// Вспомогательная функция для записи результатов в консоль сервера.
const log = (error, message) => error
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
    (err) => log(err, "База данных подключена"));

  // Сбрасываем базу данных, чтобы затем загрузить свежие данные.
  mongoose.connection.dropDatabase((err) => log(err, "База данных сброшена"));

  // Загружаем свежие данные в базу данных.
  schemes.Product.create(products, (err) => log(err, "Продукты загружены"));
  schemes.Comment.create(comments, (err) => log(err, "Комментарии загружены"));
  schemes.Review.create(reviews, (err) => log(err, "Отзывы загружены"));
  schemes.User.create(users, (err) => log(err, "Пользователи загружены"));
  schemes.Brand.create(brands, (err) => log(err, "Бренды загружены"));
  schemes.Category.create(categories, (err) => log(err, "Категории загружены"));
  schemes.Color.create(colors, (err) => log(err, "Цвета загружены"));
};