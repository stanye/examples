Function.prototype.myBind = function(context, ...args) {
  var self = this;
  
  return function(...newArgs) {
    const totalArgs = [...args, ...newArgs];

    return self.apply(context, [...totalArgs]);
  }
}