// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const user = require('./user')
const product = require('./product')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', user)
router.use('/', product)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
