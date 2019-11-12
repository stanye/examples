// var options = {
//   root: null,
//   threshold: [0, 0.5, 1],
//   rootMargin: ''
// }

// var intersectionObserver = new IntersectionObserver(function(entries) {
//   console.log(entries);
// }, options);
// console.log('intersectionObserver: ', intersectionObserver);

let observer = new IntersectionObserver(
  (entries, observer) => { 
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('entry: ', entry.target.dataset);
        /* 替换属性 */
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  }, 
  {
    threshold: [0.5]
  }
  );
  
  document.querySelectorAll('img').forEach(img => { observer.observe(img) });