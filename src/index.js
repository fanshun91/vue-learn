
if (module.hot) {
  module.hot.accept()
}

// // 创建类和示例
// import Person from './chapter01/OOP-exp'

// // 创建实例 OOP-exp
// let MissYang = new Person('yang', 26)

// // 实例调用方法
// MissYang.speak()


// // 继承 OOP-extends
// import Student from './chapter01/OOP-extends'

// // 创建 Student 实例
// let xiaoming = new Student('xiaoming', 12, 'S1')

// // 调用自身方法
// xiaoming.study()

// // 调用父类方法
// xiaoming.speak()


// // 封装 OOP-package
// import Student from './chapter01/OOP-package.ts'

// let xiaoming = new Student('xiaoming', 17, 'S9')
// xiaoming.getWeight()
// xiaoming.whoIsGF()


// // 多态 OOP-dynamic
// import { A, B } from './chapter01/OOP-dymanic'

// let a = new A('A')
// a.saySomething()

// let b = new B('B')
// b.saySomething()


// // example
// import jQuery from './chapter01/example'

// window.$ = function (selector) {
//   return new jQuery(selector)
// }

// let $p = $('p')
// console.log($p)


/**
 *  Chapter 02
 */

// interview-1
// interview-2


/**
 *  Chapter 04
 */
// 单例模式
class LoginForm {
  constructor() {
    this.state = 'hide'
  }

  show() {
    if (this.state === 'show') {
      console.log('已经显示')
      return
    }

    this.state = 'show'
    console.log('登录框显示成功')
  }

  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏')
      return
    }

    this.state = 'hide'
    console.log('登录框隐藏成功')
  }
}

// 重点
LoginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new LoginForm()
    }

    return instance
  }
})()


let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.hide()

console.log('login1 === login2', login1 === login2)