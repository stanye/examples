function debounce(fn, time) {
  var timer = null;

  return function(...args) {
    var context = this;
    if (timer) clearTimeout(timer);

    timer = setTimeout(function() {
      fn.apply(context, args);
    }, time);
  }
}

function clickHandler() {
  console.log(111);
  
}

document.getElementById('mybutton').addEventListener('click', debounce(clickHandler, 3000));