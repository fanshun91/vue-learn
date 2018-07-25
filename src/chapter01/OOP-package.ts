/**
 * 封装，public protected private
 */

// 父类 
class People {
  name
  age
  protected weight // 受限制属性
  constructor(name, age) {
    this.name = name
    this.age = age
    this.weight = 120
  }

  eat() {
    console.log(`${this.name} eat something.`)
  }

  speak() {
    console.log(`my name is ${this.name}, age ${this.age}`)
  }
}

// 子类
class Student extends People {
  number
  private girlfriend // 私有属性
  constructor(name, age, number) {
    super(name, age)
    this.number = number
    this.girlfriend = 'someone'
  }

  study() {
    console.log(`${this.name} is studying.`)
  }

  getWeight() {
    console.log(`weight ${this.weight}`)
  }

  whoIsGF() {
    console.log(`my girlfriend is ${this.girlfriend}`)
  }
}

export default Student