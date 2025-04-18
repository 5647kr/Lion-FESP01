// 기본타입(Primitive Type)

// 숫자(Number), 문자열(String), 논리값(Boolean), null, undefined, Bigint, Symbol이 있다.

console.log("========== 숫자(Number) ==========");
//* 숫자(Number)

// 정수, 실수, 음수, 양수 구별이 없다
var num1 = 10;
var num2 = 3.14

console.log("type:", typeof num1, "/ value:", num1);
console.log("type:", typeof num2, "/ value:", num2);


console.log("========== 문자열(String) ==========");
//* 문자열(String)

// 큰 따옴표(""), 작은 따옴표('')안에 기술한다.

//! 따옴표 안에 따옴표 작성
var str1 = "김철수가 '안녕'이라고 말했다";
var str2 = '김철수가 "안녕"이라고 말했다';
var str3 = "김철수가 \"안녕\"이라고 말했다";
var str4 = `김철수가 "안녕"이라고 말했다`

console.log("type:", typeof str1, "/ value:", str1);
console.log("type:", typeof str2, "/ value:", str2);
console.log("type:", typeof str3, "/ value:", str3);
console.log("type:", typeof str4, "/ value:", str4);
//console.log("김철수가 "안녕"이라고 말했다"); //!Error


console.log("========== 논리값(Boolean) ==========");
//* 논리값(Boolean)

// 참(true) 또는 거짓(false) 둘 중 하나의 값을 가지는 데이터이다
var true1 = true;
var false1 = false;

console.log("type:", typeof true1, "/ value:", true1);
console.log("type:", typeof false1, "/ value:", false1);


console.log("----- 헷갈리는 Bloonean 값 -----");
//! 헷갈리는 Bloonean 값 

console.log("null == undefined: ", null == undefined);
console.log("null === undefined: ", null === undefined);
console.log("true == 1: ", true == 1);
console.log("true === 1: ", true === 1);


console.log("========== Null(Null) ==========");
//* null

// 명시적으로 값이 없음을 나타낸다
//! 데이터 타입은 Object이다.

var null1 = null;
console.log("type:", typeof null1, "/ value:", null1);


console.log("========== Undefined(Undefined) ==========");
//* undefined

// 값이 없음을 나타낸다.
//! 값이 할당되지 않은 변수의 타입과 값 모두 undefined로 지정한다.

var undefined1;
console.log("type:", typeof undefined1, "/ value:", undefined1);

// typeof는 항상 문자열을 반환한다.