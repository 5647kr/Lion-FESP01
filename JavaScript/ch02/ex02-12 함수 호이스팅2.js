console.log("========== 함수 호이스팅2 ==========");

// console.log(fuc1(10, 20)); //!Error

// 선언문 형식의 함수 정의
var fuc1 = function (x, y){
  return x + y;
}

console.log(fuc1(10, 20));

// -> ch01-15, ch01-16, ch01-22
