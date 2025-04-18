console.log("========== 참조타입의 특징 ==========");

// 기본 데이터 타입은 실제 데이터를 저장하고 다룬다.
// 참조형 데이터 타입은 실제 데이터가 잇는 위치의 주소를 저장하고 다룬다.

function func(data1, data2){
  data1 += 10;
  data2[0] += 10;
  console.log("num1:", data1, "/ arr1[0]:", data2[0]);
}

var num1 = 80;  // number
var arr1 = [80];  // array(object)

console.log('----- 함수 호출 이전 -----');
console.log("num1:", num1, "/ arr1[0]:", arr1[0]);

console.log('----- 함수 호출 -----');
func(num1, arr1);

console.log('----- 함수 호출 이후 -----');
console.log("num1:", num1, "/ arr1[0]:", arr1[0]);

// 함수 호출 이전
// num1 -> 80 -> data1
// arr1 -> 123 -> data2
// 함수 호출
// data1 -> 80 + 10 -> 90
// data2 -> 123 + 10 -> [90]
// 함수 호출 이후
// data1 -> 사라짐
// data2 -> 사라짐
// num1 -> 80
// arr1 -> 123 -> [90]
// [80](주소: 123) -> [90]