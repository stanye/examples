var add = function(a) {
  function sum(b) {
    a = a + b;
    return sum;
  }

  sum.toString = function() {
    return a;
  }

  return sum;
}

var a = add(1);
console.log('a: ', a);
a = add(1)(2);
console.log('a: ', a);
a = add(1)(2)(3);
console.log('a: ', a);
a = add(1)(2)(3)(4);
console.log('a: ', a);
