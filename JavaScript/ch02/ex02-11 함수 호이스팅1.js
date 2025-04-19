console.log("========== 함수 호이스팅1 ==========");

// 선언문 형태(선언문 형식의 함수, var)로 정의한 함수의 유효범위는 코드의 맨 처음부터 시작한다.

console.log(fuc1(10, 20));

// 선언문 형식의 함수 정의
function fuc1(x, y){
  return x + y;
}

console.log(fuc1(10, 20));


