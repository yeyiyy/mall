export function debounce(fn, delay){
  const timer = null;
  return function(){
    if(!timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

export function throttle(fn, delay){
  const timer = null;
  return function(){
    if(!timer){
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay)
    }
  }
}
