/**
 * Модуль настроек.
 */
module.exports = {
  /**
   * Настройки сервера Express.
   */
  server: {
    /**
     * Порт по умолчанию.
     */
    DEFAULT_PORT: 80,

    /**
     * Номер параметра командной строки со значением порта.
     */
    INDEX: 2,

    /**
     * Возвращает номер порта, указанный через параметр командной строки.
     * Если параметр не был указан, то возвращает порт по умолчанию.
     */
    get PORT() {
      return parseInt(process.argv[this.INDEX]) || this.DEFAULT_PORT;
    },

    /**
     * Возвращает адрес сервера Express.
     */
    get URL() {
      return `http://localhost:${this.PORT}`;
    }
  },

  /**
   * Настройки MongoDB.
   */
  db: {
    /**
     * Имя базы данных.
     */
    NAME: "shop",

    /**
     * Порт по умолчанию.
     */
    DEFAULT_PORT: 27017,

    /**
     * Номер параметра командной строки со значением порта.
     */
    INDEX: 3,

    /**
     * Возвращает номер порта, указанный через параметр командной строки.
     * Если параметр не был указан, то возвращает порт по умолчанию.
     */
    get PORT() {
      return parseInt(process.argv[this.INDEX]) || this.DEFAULT_PORT;
    },

    /**
     * Возвращает адрес cервера MongoDB.
     */
    get URL() {
      return `mongodb://localhost:${this.PORT}/${this.NAME}`;
    }
  },

  /**
   * Коды состояния HTTP.
   */
  status: {
    /**
     * Внутренняя ошибка сервера
     */
    INTERNAL_SERVER_ERROR: 500
  }
};