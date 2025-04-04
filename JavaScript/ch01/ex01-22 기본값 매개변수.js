console.log("----------기본값 매개변수1----------");

// TODO: hoisting 단원.
function sum1(a, b) { // 값이 없을경우 undefined가 아닌 0으로 지정
  return a + b;
}
console.log(sum1(10, 20));
console.log(sum1(30));

function sum2(a, b = 0) { // 값이 없을경우 undefined가 아닌 0으로 지정
  return a + b;
}
console.log(sum2(10, 20));
console.log(sum2(30));

console.log("----------기본값 매개변수2----------");

// TODO: IIFE pattern
// 구조 분해 할당과 같이 사용
(function(){
  function sum([x=0, y=0] = []){
    return x + y;
  }
  
  console.log(sum([1, 2]));
  console.log(sum([1]));
  console.log(sum([]));
  console.log(sum());
})();

console.log("----------기본값 매개변수3----------");

(function(){
  function sum({x=0, y=0} = {}){
    return x + y;
  }
  
  console.log(sum({x: 5, y: 6}));
  console.log(sum({x: 4}));
  console.log(sum({}));
  console.log(sum());
})();



