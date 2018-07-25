class SingleObject {
  login() {
    console.log('login...')
  }
}

// 为 SingleObject 定义一个静态方法
SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }

    return instance
  }
})()


// 测试 ------------------------
let obj1 = SingleObject.getInstance()
obj1.login()

let obj2 = SingleObject.getInstance()
console('obj1 === obj2', obj1 === obj2)
