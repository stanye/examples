function getData(data) {
  console.log('data: ', data);
  return new Promise(function(resolve, reject) {
    if (data > 6) {
      reject(data);
    }
    else {
      resolve(data);
    }
  })
}

function renderPage() {
  console.log('1111');
};

document.getElementById('button1').addEventListener('click', function(){
  fetchAndRender(10)
  .then((data) => {console.log(data);console.log('done');}, e => {console.log(e);console.log('error');})
});

// 串行
// function fetchAndRender(n) {
//   const arr = Array(n).fill(getData);
//   console.log('arr: ', arr);

//   let promises = arr.reduce(
//     (prev, current, index) => {
//       return prev.then(() => current(index))
//     },
//     Promise.resolve()
//   );

//   promises.then((data) => {
//     renderPage(data);
//     return Promise.resolve();
//   }).catch((e) => {
//     renderPage();
//     return Promise.reject(e);
//   })

//   return promises;
// }

// 并行
function fetchAndRender(n) {
  const arr = Array(n).fill(getData);

  const promises = arr.map((fn, index) => fn(index))

  let p = Promise.all(promises);
  p.catch((e) => {
    console.log('e: ', e);
    if (e >= 3) {
      renderPage();
    }
    return Promise.reject(e);
  });

  return p;
}