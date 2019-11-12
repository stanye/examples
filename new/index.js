function MyNew(Func, ...args) {
  let obj = Object.create(Func.prototype);
  let res = Func.apply(obj, args);

  if (Array.isArray(res) || Object.prototype.toString.call(res) === '[object Object]') {
    return res;
  }
  
  return obj;
}

function Person(name) {
  this.name = name;
}

let p = MyNew(Person, 'Kobe');
console.log(p);
console.log(p.name);