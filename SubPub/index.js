let event = {
  list: {},
  // 订阅
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  emit() {
    let key = [].shift.call(arguments);
    let fns = this.list[key];

    if (!fns || fns.length === 0) {
      return false;
    }

    fns.forEach(fn => {
      fn.apply(this, arguments);
    });
  },
  remove(key, fn) {
    let fns = this.list[key];

    if (!fns) {
      return false;
    }

    if (!fn) {
      fns && (fns.length = 0);
    }
    else {
      fns.forEach((cb, i) => {
        if (cb === fn) {
            fns.splice(i, 1);
        }
      });
    }
  }
}

function cat() {
  console.log('一起喵喵喵');
}

function dog() {
  console.log('一起旺旺旺');
}

// 订阅
event.on('pet', data => {
  console.log('接收数据');
  console.log(data);
});

event.on('pet', dog);
event.on('pet', cat);

// 发布

event.emit('pet', ['husky', 'yasuo'])