console.log("----------함수----------");

// TODO: hoisting 단원. 함수 선언보다 먼저 사용이 가능한 이유
console.log("----------hoisting----------");
sum1();

console.log("----------함수1----------");

// 10 + 100의 결과를 출력한다.
function sum1(){
  var n1 = 10;
  var n2 = 100;
  var result = n1 + n2;
  console.log(n1 + ' + ' + n2 + ' = ' + result);
}
sum1();

console.log("----------함수2----------");

// 전달받은 숫자와 100의 합계를 출력한다.
function sum2(n1){
  var n2 = 100;
  var result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}
sum2(20);
sum2(30);

console.log("----------함수3----------");

// 전달받은 두 수의 합계를 출력한다.
function sum3(n1, n2){
  var result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}
sum3(30, 40);
sum3(30, 40);

console.log("----------함수4----------");

// 전달받은 두 수의 합계를 반환한다.
function sum4(n1, n2){
  var result = n1 + n2;
  return (`${n1} + ${n2} = ${result}`);
}
console.log(sum4(40, 50));
console.log(sum4(40, 50));
