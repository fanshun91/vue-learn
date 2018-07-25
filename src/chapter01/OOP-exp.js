// 创建类
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log(`${this.name} eat something.`)
  }

  speak() {
    console.log(`my name is ${this.name}, age ${this.age}`)
  }
}

export default Person