// Reflect
// 1. 将Object对象的内部方法放到Reflect上，目前阶段并存
// 2. 修改某些Object方法的返回结果
// 3. 将某些Object操作编程函数式
// 4. Reflect和Proxy对象一一对应 

Reflect.apply();
Reflect.construct();
Reflect.get();
Reflect.set();
Reflect.defineProperty();
Reflect.deleteProperty();
Reflect.has();
Reflect.ownKeys();
Reflect.isExtensible();

// example1
function Person(name) {
  this.name = name;
} 
var person = new Person('Stan');

Reflect.construct(Person, ['Stan'])