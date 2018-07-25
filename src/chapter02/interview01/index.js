// 车的大类
class Vehicle {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
}

// 快车 类
class ExpressCar extends Vehicle {
  constructor(name, number) {
    super(name, number)
    this.price = 1
  }
}

// 专车 类
class SpecialCar extends Vehicle {
  constructor(name, number) {
    super(name, number)
    this.price = 2
  }
}

// 行程 类
class Trip {
  constructor(car) {
    this.car = car
  }

  start() {
    console.log(`行程开始-> 名称：${this.car.name}, 车牌号：${this.number}`)
  }

  end() {
    console.log(`行程结束-> 价格：${this.car.price * 5} 元`)
  }
}

let car = new SpecialCar('捷豹', '鲁R0219')
let trip = new Trip(car)

trip.start()
trip.end()
