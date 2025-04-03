console.log("----------splice 연산자----------");

// TODO: hoisting 단원. 변수 중복 선언 가능
var arr1 = ['zero', 'one', 'three', 'four'];
var arr2 = arr1.splice(2, 0, 'two');
console.log('arr1', arr1);

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 배열의 요소를 삭제, 교체, 추가하고 제거한 요소를 담은 배열을 반환한다.
// deleteCount 생략시 마지막까지 제거

var arr2 = arr1.splice(3, 1);
console.log(arr2);

var arr2 = arr1.splice(1);
console.log(arr2);

var arr2 = arr1.splice();  // 빈배열 반환
console.log(arr2);

console.log("----------slice 연산자----------");

var arr3 = ['zero', 'one', 'three', 'four'];
var arr4 = arr3.splice(2, 0, 'two');

// slice([begin[, end]])
// 배열의 begin부터 end까지(end -1 인덱스까지) 요소를 복사해서 새로운 배열을 반환한다.

// begin 생략시 0
// begin이 음수일 경우 배열의 뒤에서 부터 복사
// end 생략시 마지막까지 복사
// 원본 데이터 유지

var arr4 = arr3.slice(1, 3);
console.log(arr4);
var arr4 = arr3.slice(-3, -1);
console.log(arr4);
var arr4 = arr3.slice(2);
console.log(arr4);
var arr4 = arr3.slice(-2);
console.log(arr4);
var arr4 = arr3.slice(); // 전체를 복사한다.
console.log(arr4);

console.log('arr3', arr3);
console.log('arr4', arr4);
console.log(arr3 === arr4);