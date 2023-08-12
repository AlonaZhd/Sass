class Product {
  static #list = []

  static #count = 0

  constructor(
    img,
    title,
    description,
    category,
    price,
    amount = 0,
  ) {
    this.id = ++Product.#count // Генеруємо унікальний id для товару
    this.img = img
    this.title = title
    this.description = description
    this.category = category
    this.price = price
    this.amount = amount
  }

  static add = (...data) => {
    const newProduct = new Product(...data)

    this.#list.push(newProduct)
  }

  static getList = () => {
    return this.#list
  }

  static getById = (id) => {
    // console.log('Searching for product with id:', id)
    return this.#list.find((product) => product.id === id)
  }

  static getRandomList = (id) => {
    // Фільтруємо товари, щоб вилучити той, з яким порівнюємо id
    const filteredList = this.#list.filter(
      (product) => product.id !== id,
    )

    // Відсортовуємо за допомогою Math.random() та перемашаємо масив
    const shuffledList = filteredList.sort(
      () => Math.random() - 0.5,
    )

    // Повертаємо перші 3 елементи з перемішаного масиву
    return shuffledList.slice(0, 3)
  }
}

module.exports = Product