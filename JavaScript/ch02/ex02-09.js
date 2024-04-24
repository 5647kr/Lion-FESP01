console.log("----------Function 함수 생성----------");

// Function 생성자 함수
var add = new Function('x', 'y', 'return x + y;');
//! 반드시 function을 대문자로 
console.log(add(50, 60));