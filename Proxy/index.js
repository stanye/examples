var handler = {
  get: function(target, key) {
    return target[key];
  },
  set: function(target, key, value) {
    target[key] = value;
    return target[key];
  },
  has: function() {}
};

var {proxy, revoke} = Proxy.revocable({}, handler);

proxy.name = 1;
console.log(proxy.name);
revoke();
console.log(proxy);