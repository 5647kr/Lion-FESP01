console.log("========== 함수4 ==========");

// 동적으로 생성된 프로퍼티를 가질 수 있다.
function fuc1(x, y){
  fuc1.result = x + y;
  return fuc1.result;
}

console.log("fuc1(10, 20):", fuc1(10, 20));
console.log("fuc1(10, 20):", fuc1(10, 20));

var result = fuc1(30, 40);
console.log("result:", result);
console.log("result:", result);

// 마지막 계산 결과를 출력
fuc1(50, 60);
console.log("fuc1.result:", fuc1.result);
console.log("fuc1.result:", fuc1.result);