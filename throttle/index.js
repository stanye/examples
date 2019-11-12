function throttle(fn, time) {
  var timer = null;

  return function() {
    var args = Array.prototype.slice.call(arguments);
    var context = this;
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args);
        timer = null;
      }, time)
    }
  }
}

// 
function throttle1(fn, time) {
  var prev = Date.now();

  return function(...args) {
    var context = this;
    var now = Date.now();
    if (now - prev >= time) {
      timer = setTimeout(function() {
        fn.apply(context, args);
        prev = Date.now();
      }, time)
    }
  }
}


function clickHandler() {
  console.log(111);
}

document.getElementById('mybutton').addEventListener('click', throttle(clickHandler, 3000));