const express = require("express");
const data = require("./data");

/**
 * Роутер, обрабатывающий запросы API.
 */
module.exports = new express.Router()
  // Продукты.
  .get("/products")
  .get("/product/:id")
  .get("/product/:id/category")
  .get("/product/:id/brand")
  .get("/product/:id/color")
  .get("/product/:id/comments")
  .get("/product/:id/reviews")
  // Комментарии.
  .get("/comments")
  .get("/comment/:id")
  .get("/comment/:id/product")
  .get("/comment/:id/author")
  .get("/comment/:id/replies")
  // Отзывы.
  .get("/reviews")
  .get("/review/:id")
  .get("/review/:id/product")
  .get("/review/:id/author")
  // Пользователи.
  .get("/users")
  .get("/user/:id")
  .get("/user/:id/comments")
  .get("/user/:id/reviews")
  // Бренды.
  .get("/brands")
  .get("/brand/:id")
  .get("/brand/:id/products")
  // Категории.
  .get("/categories")
  .get("/category/:id")
  .get("/category/:id/products")
  // Цвета.
  .get("/colors", data.colors.all)
  .get("/color/:id", data.colors.byId)
  .get("/color/:id/products", data.colors.products);