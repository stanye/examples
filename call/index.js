Function.prototype.myCall = function(context, ...args) {
  context = context || window;
  context.fn = this;
  args = args || [];

  const result = context.fn(args);
  delete context.fn;

  return result;
}

var a = 1;
function test() {
  console.log(this.a);
}


var b = {
  a: 2
}

test.myCall(b);