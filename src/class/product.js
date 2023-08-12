class Product {
  static #list = []

  constructor(name, price, description) {
    this.id = this.generateId()
    this.createDate = new Date().toISOString()
    this.name = name
    this.price = price
    this.description = description
  }

  generateId() {
    // Генеруємо п'ятизначне випадкове число для id
    const min = 10000
    const max = 99999
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  static getList = () => this.#list

  static add = (product) => this.#list.push(product)

  static getById = (id) =>
    this.#list.find((product) => product.id === id)

  static updateById = (id, data) => {
    const product = this.getById(id)

    if (product) {
      this.update(product, data)
      return true
    } else {
      return false
    }
  }

  static update = (
    product,
    { name, price, description },
  ) => {
    if (name) {
      product.name = name
    }
    if (price) {
      product.price = price
    }
    if (description) {
      product.description = description
    }
  }

  static deleteById = (id) => {
    const index = this.#list.findIndex(
      (product) => product.id === Number(id),
    )

    if (index !== -1) {
      this.#list.splice(index, 1)
      return true
    } else {
      return false
    }
  }
}

module.exports = Product
