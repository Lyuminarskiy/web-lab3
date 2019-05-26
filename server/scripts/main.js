const path = require("path");
const express = require("express");
const history = require("connect-history-api-fallback");
const bootstrap = require("./bootstrap");
const apiRouter = require("./router");
const {server: {PORT, URL}} = require("./config");


/**
 * Функция промежуточной обработки для вывода в консоль сервера информации
 * о запросах клиента:
 *
 * - дата и время запроса,
 * - используемый метод HTTP,
 * - адрес запрашиваемого ресурса.
 *
 * @param {Request} request - Объект запроса клиента.
 * @param {Response} response - Объект ответа сервера.
 * @param {Function} next - Следующая функция в конвейере обработки запросов
 * сервера Express.
 */
const loggingMiddleware = ({method, url}, response, next) => {
  console.log(`${Date()} | ${method} ${url}`);
  next();
};

/**
 * Путь к папке клиентской части.
 */
const clientPath = path.join(__dirname, "../../client");

/**
 * Функция промежуточной обработки, предоставляющая доступ к файлам
 * из каталога клиентской части.
 */
const staticMiddleware = express.static(clientPath);

/**
 * Функция промежуточной обработки для поддержки на клиенте специального
 * режима работы Vue Router - HTML5 History.
 */
const historyMiddleware = history({
  logger: (...info) => console.log(`${Date()} | ${info.join(" ")}`)
});

// Обновляем содержимое базы данных.
bootstrap()
  .then(() => {
    // Создаём и настраиваем конвейер обработки запросов сервера Express.
    express()

      // Добавляем функцию вывода в консоль сервера информации о запросах.
      .use(loggingMiddleware)

      // Добавляем роутер Express для обработки запросов к API сервера.
      .use("/api", apiRouter)

      // Добавляем функцию предоставления статических файлов клиентской части.
      .use(staticMiddleware)

      // Добавляем функцию управления историей переходов.
      .use(historyMiddleware)

      // Ещё раз добавляем функцию предоставления статических файлов клиентской
      // части для обработки случаев переадресации запроса.
      .use(staticMiddleware)

      // Запускаем сервер.
      .listen(PORT,
        () => console.log(`${Date()} | Сервер доступен по адресу ${URL}`));
  });