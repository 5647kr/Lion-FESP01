function sum(a, b, c){
  return a + b + c;
}
console.log("sum(10, 20, 30):", sum(10, 20, 30));

function currySum1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

var currySum2 = a => b => c => a + b + c;

var curryfuc1 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      }
    }
  }
};
var currySum3 = curryfuc1(sum)

console.log("currySum1(10)(20)(30):", currySum1(10)(20)(30));
console.log("currySum2(10)(20)(30):", currySum2(10)(20)(30));


// lodash

var currySum4 = _.curry(sum);
console.log("currySum4(2)(3)(4):", currySum4(2)(3)(4));
console.log("currySum4(2, 3)(4):", currySum4(2, 3)(4));
console.log("currySum4(2)(3, 4):", currySum4(2)(3, 4));
console.log("currySum4(2, 3, 4):", currySum4(2, 3, 4));