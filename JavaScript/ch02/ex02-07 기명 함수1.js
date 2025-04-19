console.log("========== 함수 선언 ==========");

console.log("----- 기명 함수 -----");
// 표현식 방식의 함수 생성(기명함수)

let fuc1 = function sum1(a, b) {
  return a + b;
};

console.log("fuc1(30, 40):", fuc1(30, 40));
//console.log(sum1(30, 40)); //!Error

