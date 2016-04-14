// @flow

// BAD
function foo(x) {
  return x * 10;
}

foo('Hello, world!');



// BAD
function length1(x) {
  return x.length;
}

module.exports = length1;

//var total1 = length1('Hello') + length1(null);

// GOOD
function length2(x) {
  if (x !== null) {
    return x.length;
  } else {
    return 0;
  }
}

var total2 = length2('Hello') + length2(null);


// BAD
function foo1(x) {
  return x.length;
}

var res1 = foo1('Hello') + foo1(42);

// GOOD
function foo2(x) {
  if (typeof x === 'string') {
    return x.length;
  } else {
    return x;
  }
}

var res2 = foo2('Hello') + foo2(42);
