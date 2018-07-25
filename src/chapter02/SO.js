function loadImg(src) {
  let promise = new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = () => {
      resolve(img)
      img.src = src
    }
    img.onerror = () => {
      reject('图片加载失败')
    }
  })

  return promise
}

let src = 'https://developer.mozilla.org/static/img/web-docs-sprite.22a6a085cf14.svg'
let result = loadImg(src)

result
  .then(img => {
    console.log(`img's width：${img.width}`)
    return img
  })
  .then(img => {
    console.log(`img's height：${img.height}`)
  })
  .catch(ex => {
    console.log(ex)
  })