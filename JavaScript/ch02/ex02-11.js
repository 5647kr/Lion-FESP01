console.log("----------함수 호이스팅----------");

// 선언문 형태(선언문 형식의 함수, var)로 정의한 함수의 유효범위는 코드의 맨 처음부터 시작한다.

console.log(add(10, 20));

// 선언문 형식의 함수 정의
function add(x, y){
  return x + y;
}

console.log(add(10, 20));


