class Person {
  constructor(name, house) {
    this.name = name
    this.house = house
  }
  saySomething() { }
}

class A extends Person {
  constructor(name, house) {
    super(name, house)
  }

  saySomething() {
    console.log('I am A.')
  }
}

class B extends Person {
  constructor(name, house) {
    super(name, house)
  }

  saySomething() {
    console.log('I am B.')
  }
}

class House {
  constructor(city) {
    this.city = city
  }

  showCity() {
    console.log(`house in ${this.city}`)
  }
}

let aHouse = new House('北京')
let a = new A('A', aHouse)