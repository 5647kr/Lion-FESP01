console.log("========== Function 생성자 함수 ==========");

// Function 생성자 함수
var fuc1 = new Function('x', 'y', 'return x + y;');
//! 반드시 function을 대문자로 
console.log("fuc1(50, 60):", fuc1(50, 60));