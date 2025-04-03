console.log("----------배열 생성----------");

// 하나의 변수에 여러개의 값을 지정하는 데이터 구조
// 순서정보(index)를 이용하여 각 요소를 참조한다(0부터 시작)

var arr1 = new Array('orange', 'yellow');
var arr2 = ['black', 'silver'];

console.log(typeof arr1, arr1, arr1.length);
console.log(typeof arr2, arr2, arr2.length);


// 요소 추가
// 1. arr1[2]
arr1[2] = "red"
console.log(arr1);

// 2. arr2.push();
arr2.push('white');
console.log(arr2)



// 요소 읽기
// 1.arr1[2]
console.log(arr1[2])

// 2. arr2.pop();
console.log(arr2.pop())


// 배열 요소의 수: length

console.log(arr1.length)
console.log(arr2.length)