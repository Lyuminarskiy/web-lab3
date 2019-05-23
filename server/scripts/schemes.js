const mongoose = require("mongoose");


const {Schema, model} = mongoose;

module.exports = {
  /**
   * Схема продукта.
   */
  Product: model("Product", new Schema({
    id: {
      type: Number,
      required: true,
      min: 1
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20
    },
    price: {
      type: Number,
      required: true,
      min: 0.01
    },
    category: {
      type: Number,
      required: true,
      min: 1
    },
    brand: {
      type: Number,
      required: true,
      min: 1
    },
    color: {
      type: Number,
      required: true,
      min: 1
    },
    specs: {
      width: {
        type: Number,
        required: true,
        min: 0.001
      },
      height: {
        type: Number,
        required: true,
        min: 0.001
      },
      depth: {
        type: Number,
        required: true,
        min: 0.001
      },
      weight: {
        type: Number,
        required: true,
        min: 0.001
      }
    },
    overview: {
      type: String,
      required: true,
      minlength: 15
    },
    description: {
      type: String,
      required: true,
      minlength: 30
    },
    image: {
      type: String,
      required: true,
      minlength: 1
    }
  })),

  /**
   * Схема комментария.
   */
  Comment: model("Comment", new Schema({
    id: {
      type: Number,
      required: true,
      min: 1
    },
    product: {
      type: Number,
      required: true,
      min: 1
    },
    author: {
      type: Number,
      required: true,
      min: 1
    },
    reply: {
      type: Number,
      min: 1
    },
    date: {
      type: Date,
      required: true
    },
    text: {
      type: String,
      required: true,
      minlength: 10
    }
  })),

  /**
   * Схема отзыва.
   */
  Review: model("Review", new Schema({
    id: {
      type: Number,
      required: true,
      min: 1
    },
    product: {
      type: Number,
      required: true,
      min: 1
    },
    author: {
      type: Number,
      required: true,
      min: 1
    },
    rate: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    date: {
      type: Date,
      required: true
    },
    text: {
      type: String,
      required: true,
      minlength: 10
    }
  })),

  /**
   * Схема пользователя.
   */
  User: model("User", new Schema({
    id: {
      type: Number,
      required: true,
      min: 1
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30
    },
    image: {
      type: String,
      required: true,
      minlength: 1
    }
  })),

  /**
   * Схема бренда.
   */
  Brand: model("Brand", new Schema({
    id: {
      type: Number,
      required: true,
      min: 1
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15
    }
  })),

  /**
   * Схема категории.
   */
  Category: model("Category", new Schema({
    id: {
      type: Number,
      required: true,
      min: 1
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15
    }
  })),

  /**
   * Схема цвета.
   */
  Color: model("Color", new Schema({
    id: {
      type: Number,
      required: true,
      min: 1
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15
    }
  }))
};