console.log("----------reduce 함수----------");

var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = arr.reduce(function(acc, curr) {
  return acc + curr;
}, 100);
// acc(accumulator): 누산기
//curr(currentValue): 요소값
//100: 초기값
console.log(sum);