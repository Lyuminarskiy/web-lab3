const path = require("path");
const express = require("express");
const history = require("connect-history-api-fallback");
const bootstrap = require("./bootstrap");
const apiRouter = require("./router");
const {server: {PORT, URL}} = require("./config");


// Определяем путь к папке клиентской части.
const clientPath = path.join(__dirname, "../../client");

// Создаём функцию промежуточной обработки для предоставления файлов
// из каталога клиентской части.
const staticMiddleware = express.static(clientPath);

// Создаём функцию промежуточной обработки для поддержки на клиенте
// режима работы роутера HTML5 History.
const historyMiddleware = history({
  logger: (...info) => console.log(`${Date()} | ${info.join(" ")}`)
});

// Создаём функцию промежуточной обработки для вывода в консоль сервера
// информации о запросах.
const loggingMiddleware = ({method, url}, response, next) => {
  console.log(`${Date()} | ${method} ${url}`);
  next();
};

// Обновляем содержимое базы данных.
bootstrap()
  .then(() => {
    // Создаём и настраиваем конвейер обработки запросов сервером Express.
    express()
    // Добавляем функцию вывода в консоль сервера информации о запросах.
      .use(loggingMiddleware)
    // Добавляем роутер для обработки запросов API.
      .use("/api", apiRouter)
    // Добавляем функцию предоставления статических файлов.
      .use(staticMiddleware)
    // Добавляем функцию управления историей переходов.
      .use(historyMiddleware)
    // Ещё раз добавляем функцию для обработки случаев переадресации.
      .use(staticMiddleware)
    // Запускаем сервер.
      .listen(PORT,
        () => console.log(`${Date()} | Сервер доступен по адресу ${URL}`));
  });