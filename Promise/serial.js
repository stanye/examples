const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, ms);
});

const ajax1 = () => timeout(2000).then(() => {

  console.log('1');
  return 1;
  });
  
  const ajax2 = () => timeout(1000).then(() => {
  
  console.log('2');
  return 2;
  });
  
  const ajax3 = () => timeout(2000).then(() => {
  
  console.log('3');
  return 3;
  });
  
  const mergePromise = ajaxArray => {
    var data = [];
    var sequence = Promise.resolve();
    ajaxArray.forEach(function (item) {
      // 第一次的 then 方法用来执行数组中的每个函数，
      // 第二次的 then 方法接受数组中的函数执行后返回的结果，
      // 并把结果添加到 data 中，然后把 data 返回。
      sequence = sequence.then(item).then(function (res) {
        data.push(res);
        return data;
      });
    })

    return sequence;
  };
  // const mergePromise = ajaxArray => {
  //   var data = [];
  //   return ajaxArray.reduce(
  //     (prev, current) => {
  //       return prev.then(current).then((res) => {
  //         data.push(res);
  //         return data;
  //       })
  //     },
  //     Promise.resolve()
  //   )
  // }
  

  mergePromise([ajax1, ajax2, ajax3]).then(data => {

    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
    });