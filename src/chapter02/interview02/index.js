// 车辆
class Car {
  constructor(number) {
    this.number = number
  }
}

// 停车场
class Park {
  constructor(floors) {
    this.floors = floors || []
    this.camera = new Camera()  // 摄像头
    this.screen = new Screen()  // 显示屏
    this.carList = {}  //存储摄像头拍摄返回的车辆信息
  }

  hasEntered(car) {
    // 通过摄像头获取信息
    const info = this.camera.shot(car)

    // 停到某个停车位
    const i = parseInt(Math.random() * 100 % 100)

    // 暂时只停放在一层
    const space = this.floors[0].spaces[i]
    space.enter()  // 停车位被占用
    info.space = space  // 记录停在了哪个停车位

    // 记录车辆信息
    this.carList[car.number] = info
  }

  hasLeaved(car) {
    // 获取信息
    const info = this.carList[car.number]

    // 将停车位清空
    const space = info.space
    space.leave()

    // 显示停车时长
    this.screen.show(car, info.inTime)

    // 清空记录
    delete this.carList[car.number]
  }

  unUsedNum() {
    return this.floors.map(floor => {
      return `${floor.index} 层还有 ${floor.unUsedSpaceNum()} 个空车位。`
    }).join('\n')
  }
}

// 层
class Floor {
  constructor(index, spaces) {
    this.index = index
    this.spaces = spaces
  }

  // 空余车位
  unUsedSpaceNum() {
    let num = 0
    this.spaces.forEach(space => {
      if (space.unUsed) {
        num++
      }
    })

    return num
  }
}

// 车位
class Space {
  constructor() {
    // 车位状态初始化
    this.unUsed = true
  }

  // 车辆进入
  enter() {
    this.unUsed = false
  }

  // 车辆驶出
  leave() {
    this.unUsed = true
  }
}

// 摄像头
class Camera {
  shot(car) {
    return {
      num: car.number,
      inTime: Date.now()
    }
  }
}

// 显示屏
class Screen {
  show(car, inTime) {
    console.log(`车牌号：${car.number}`)
    console.log(`停车时间：${Date.now() - inTime}`)
  }
}


// 测试 ——————————————————————————
// 创建层和每层的车位
const floors = []

for (let i = 0; i < 3; i++) {
  const spaces = []
  for (let j = 0; j < 100; j++) {
    spaces[j] = new Space()
  }

  floors[i] = new Floor(i + 1, spaces)
}

// 创建停车场
const park = new Park(floors)

// 初始化车辆
const car1 = new Car(238109)
const car2 = new Car(983256)
const car3 = new Car(843912)

console.log('第一辆车驶入')
console.log(park.unUsedNum())
park.hasEntered(car1)
console.log('第二辆车驶入')
console.log(park.unUsedNum())
park.hasEntered(car2)

console.log('第一辆车驶出')
console.log(park.unUsedNum())
park.hasLeaved(car1)

console.log('第三辆车驶入')
console.log(park.unUsedNum())
park.hasEntered(car3)