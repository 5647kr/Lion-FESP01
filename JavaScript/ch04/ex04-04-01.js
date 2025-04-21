var sum = function(x, y, z){
  return x + y + z;
}

// function에 partial 기능 추가
// property, this, arguments, 전개연산자, 고차 함수, apply, closure
Function.prototype.partial = function () {
  var fn = this;
  var preArgs = [...arguments]; // [20, 80]
  return function () {
    // [20, 80, 30]
    var args = [...preArgs, ...arguments];
    return fn.apply(this, args);
  }
}

var sum1 = sum.partial(20, 80);
console.log("sum1(30):", sum1(30));
console.log("sum1(50)", sum1(50));