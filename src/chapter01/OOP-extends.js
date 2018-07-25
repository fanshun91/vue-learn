import Person from './OOP-exp'

// 创建学生类继承 Person 类
class Student extends Person {
  constructor(name, age, number) {

    // 传给父类的构造函数
    super(name, age)
    this.number = number
  }

  study() {
    console.log(`${this.name} is studying.`)
  }
}

export default Student