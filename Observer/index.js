// 发布类
class Subject {
  constructor(data) {
    this.obList = [];
    this.data = data;
  }
  add(ob) {
    if (arguments.length >= 1) {
      Array.from(arguments).forEach(item => this.obList.push(item));
    }
  }
  remove(ob) {
    let i = this.obList.findIndex(ele => ele === ob);
    if (i >= 0) {
      this.obList.splice(i, 1);
    }
  }
  notify() {
    this.obList.forEach((item) => {
      item.update(this.data);
    })
  }
}

// 观察者类
class Observer {
  constructor(id) {
    this.id = id;
  }
  update(data) {
    console.log('observer ' + this.id + ': ' + data + ';');
  }
}

function test() {
  let sub = new Subject('test');
  let ob1 = new Observer(1);
  let ob2 = new Observer(2);
  let ob3 = new Observer(3);

  sub.add(ob1, ob2, ob3);

  sub.notify();

  sub.remove(ob2);

  sub.notify();
}

test();
