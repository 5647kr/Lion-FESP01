console.log("----------화살표 함수 생성1----------");

var arr = [10, 20, 30];

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
var arr2 = [];
for(var i = 0; i < arr.length; i++){
  arr2.push(arr[i] ** 2);
}
console.log(arr2);

console.log("----------화살표 함수 생성2----------");
// ECMA5
var arr3 = [];
arr.forEach(function(elem){
  arr3.push(elem ** 2);
});
console.log(arr3);

console.log("----------화살표 함수 생성3----------");
// ECMA6
var arr4 = arr.map(function(elem){
  return elem ** 2;
});
console.log(arr4);

console.log("----------화살표 함수 생성4----------");
// ECMA6 arrow function
var arr5 = [];
arr.forEach((elem) => {
  arr5.push(elem ** 2);
});
console.log(arr5);

//* 요소가 하나일 경우 () 생략할 수 있다.
// var arr2 = arr.map(elem => {
//   return elem ** 2;
// });

//* 본문이 하나일 경우 {}를 생략할 수 있다.
// let arr2 = arr.map(elem => return elem ** 2);

//* return 도 생략할 수 있다.
// let arr2 = arr.map(elem => elem ** 2);