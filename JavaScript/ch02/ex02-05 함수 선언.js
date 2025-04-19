console.log("========== 함수 선언 ==========");

// 선언문 방식의 함수 생성
function fuc1(x, y){
  return x + y;
}

console.log("fuc1(10, 20):", fuc1(10, 20));


// this (Ch02-14)
console.log("fuc1.call(this, 10, 20):", fuc1.call(this, 10, 20));
console.log("fuc1.apply(this, [10, 20]):", fuc1.apply(this, [10, 20]));
// console.log("fuc1.apply(this, 10, 20):", fuc1.apply(this, 10, 20)); // Error


// Ch02-15 ->
