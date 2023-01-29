function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

const sum = curry(function(a, b, c) {
  return a + b + c;
});

console.log(sum(1)(2)(3));
