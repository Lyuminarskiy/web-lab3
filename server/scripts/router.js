const express = require("express");
const {
  products,
  comments,
  reviews,
  users,
  brands,
  categories,
  colors
} = require("./data");


/**
 * Возвращает переданную функцию обработки запроса клиента, к которой
 * был добавлен третий аргумент, значением которого является
 * параметр маршрута id.
 *
 * @param {Function} callback - Функция обработки запроса клиента.
 * @return {Function} Функция обработки запроса клиента.
 */
const withId = (callback) => (request, response) => callback(request,
  response, request.params.id);

/**
 * Роутер, обрабатывающий запросы API.
 */
module.exports = new express.Router()
  // Продукты.
  .get("/products", products.all)
  .get("/product/:id", withId(products.byId))
  .get("/product/:id/category", withId(products.category))
  .get("/product/:id/brand", withId(products.brand))
  .get("/product/:id/color", withId(products.color))
  .get("/product/:id/comments", withId(products.comments))
  .get("/product/:id/reviews", withId(products.reviews))

  // Комментарии.
  .get("/comments", comments.all)
  .get("/comment/:id", withId(comments.byId))
  .get("/comment/:id/product", withId(comments.product))
  .get("/comment/:id/author", withId(comments.author))
  .get("/comment/:id/replies", withId(comments.replies))

  // Отзывы.
  .get("/reviews", reviews.all)
  .get("/review/:id", withId(reviews.byId))
  .get("/review/:id/product", withId(reviews.product))
  .get("/review/:id/author", withId(reviews.author))

  // Пользователи.
  .get("/users", users.all)
  .get("/user/:id", withId(users.byId))
  .get("/user/:id/comments", withId(users.comments))
  .get("/user/:id/reviews", withId(users.reviews))

  // Бренды.
  .get("/brands", brands.all)
  .get("/brand/:id", withId(brands.byId))
  .get("/brand/:id/products", withId(brands.products))

  // Категории.
  .get("/categories", categories.all)
  .get("/category/:id", withId(categories.byId))
  .get("/category/:id/products", withId(categories.products))

  // Цвета.
  .get("/colors", colors.all)
  .get("/color/:id", withId(colors.byId))
  .get("/color/:id/products", withId(colors.products));