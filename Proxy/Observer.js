// 观察者模式

const queuedObservers = new Set();

const observable = obj => {
  return new Proxy(obj, {
    get: function(target, key) {
      return Reflect.get(target, key);
    },
    set: function(target, key, value) {
      const result = Reflect.set(target, key, value);
      queuedObservers.forEach(queue => queue());
      return result;
    }
  })
}

const observe = fn => {
  return queuedObservers.add(fn);
}

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';