/**
 * 创建promise
 * @param {Number} value 
 */
function makePromise (value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, Math.random() * 1000)
  })
}
/**
 * 打印结果
 * @param {Number} value 
 */
function print (value) {
  return value
}

function fetchAndRender(n) {
  let promises = Array(n).fill(1).map((item, index) => {
    return makePromise(item)
  });
  
  // 并行执行
  return Promise.all(promises)
  .then(() => {
    console.log('done')
  })
  .catch(() => {
    console.log('error')
  })
}

document.getElementById('button1').addEventListener('click', function(){
  fetchAndRender(10).then((data) => {console.log(data);console.log('done');}, e => {console.log(e);console.log('error');})
});

// // 串行执行
// let parallelPromises = promises.reduce(
//   (total, currentValue) => total.then(() => currentValue.then(print)),Promise.resolve()
// )

// parallelPromises
// .then(() => {
//   console.log('done')
// })
// .catch(() => {
//   console.log('done')
// })
