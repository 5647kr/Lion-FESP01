var sum = function(x, y){
  return x + y;
}
console.log("sum(10, 20):", sum(10, 20));
console.log("sum(10, 30):", sum(10, 30));
console.log("sum(10, 40):", sum(10, 40));

var sum1 = _.partial(sum, 10);
console.log("sum1(20):", sum1(20));
console.log("sum1(30):", sum1(30));
console.log("sum1(40):", sum1(40));