function MyPromise(executor) {
  let self = this;
  this.status = 'pending';
  this.value = undefined;
  this.reason = undefined;

  this.onFulfilledCallBack = [];
  this.onRejectedCallBack = [];
  
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'fulfilled';
      self.value = value;

      self.onFulfilledCallBack.forEach(fn => fn());
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.reason = reason;

      self.onRejectedCallBack.forEach(fn => fn());
    }
  }

  try {
    executor(resolve, reject);
  } catch(e) {
      reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  var self = this;
  if (self.status === 'fulfilled') {
    return new MyPromise(function(resolve, reject) {
      let a = onFulfilled(self.value);
      if (a instanceof MyPromise) {
        a.then(resolve, reject)
      }
      else {
        resolve(a);
      }
    })
  }
  else if (self.status === 'rejected') {
    return new MyPromise(function(resolve, reject) {
      let a = onRejected(self.reason);
      if (a instanceof MyPromise) {
        a.then(resolve, reject)
      }
      else {
        resolve(a);
      }
    })
  }
  else if (self.status === 'pending') {
    return new MyPromise(function(resolve, reject) {
      self.onFulfilledCallBack.push(() => {
        let a = onFulfilled(self.value);
        if (a instanceof MyPromise) {
          a.then(resolve, reject)
        }
        else {
          resolve(a);
        }
      });
      self.onRejectedCallBack.push(() => {
        let a = onRejected(self.reason);
        if (a instanceof MyPromise) {
          a.then(resolve, reject)
        }
        else {
          resolve(a);
        }
      });
    })
  }
}


let p = new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    resolve('1111');
  }, 3000)
});

p.then(function(data) {
  console.log('data: ', data);
}, function(reasion) {
  console.log(reasion);
}).then((data) => {
  console.log('data1: ', data);
})