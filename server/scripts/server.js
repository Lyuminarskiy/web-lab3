const path = require("path");
const express = require("express");
const history = require("connect-history-api-fallback");


// Порт по умолчанию.
const DEFAULT_PORT = 80;

// Номер параметра командной строки со значением порта.
const PORT_PARAMETER_NUMBER = 2;

// Получаем номер порта через параметр командной строки.
// Если параметр не был указан, то выбираем порт по умолчанию.
const PORT = parseInt(process.argv[PORT_PARAMETER_NUMBER]) || DEFAULT_PORT;

// Определяем путь к папке клиентской части.
const clientPath = path.join(__dirname, "../../client");

// Создаём функцию промежуточной обработки для предоставления файлов
// из каталога клиентской части.
const staticMiddleware = express.static(clientPath);

// Создаём функцию промежуточной обработки для поддержки на клиенте
// режима работы роутера HTML5 History.
const historyMiddleware = history({verbose: true});

// Создаём функцию промежуточной обработки для вывода в консоль сервера
// информации о запросах.
const loggingMiddleware = ({method, url}, response, next) => {
  console.log(`${Date()} | ${method} ${url}`);
  next();
};

// Создаём и настраиваем сервер Express.
express()
  // Добавляем функцию предоставления статических файлов.
  .use(staticMiddleware)
  // Добавляем функцию управления историей переходов.
  .use(historyMiddleware)
  // Ещё раз добавляем функцию для обработки случаев переадресации.
  .use(staticMiddleware)
  // Добавляем функцию вывода в консоль сервера информации о запросах.
  .use(loggingMiddleware)
  // Запускаем сервер.
  .listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));