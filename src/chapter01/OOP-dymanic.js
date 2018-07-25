// 多态
class People {
  constructor(name) {
    this.name = name
  }
  saySomething() { }
}

class A extends People {
  constructor(name) {
    super(name)
  }

  saySomething() {
    console.log(`I am ${this.name}`)
  }
}

class B extends People {
  constructor(name) {
    super(name)
  }

  saySomething() {
    console.log(`I am ${this.name}`)
  }
}

export { A, B }