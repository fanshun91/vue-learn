class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    console.log('init')
  }

  fn1() {
    console.log('fn1')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create('test')
p.fn1()