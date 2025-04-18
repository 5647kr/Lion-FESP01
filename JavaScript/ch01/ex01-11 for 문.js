console.log("========== 배열의 모든 요소 출력 ==========");

var arr = [300, 400];
arr[2] = 500;
arr.unshift(200);
arr.unshift(100);
console.log("arr:", arr);


console.log("----- for 문 -----");

// 배열의 모든 요소 출력(for)

for(var i = 0; i < arr.length; i++) {
  console.log(`i: ${i} / arr[${i}]: ${arr[i]}`);
}


console.log("----- for-in 문 -----");

// 배열의 모든 요소 출력(for-in)

for(var i in arr) {
  console.log(`i: ${i} / arr[${i}]: ${arr[i]}`);
}


console.log("----- for-of 문 -----");

// 배열의 모든 요소 출력(for-of)
//* 인덱스를 꺼내 쓰기보단 요소만을 필요로 할 때 사용한다.

for(var elem of arr) {
  console.log("elem:", elem);
}


console.log("----- forEach 문 -----");

// 배열의 모든 요소 출력(forEach())

arr.forEach(function(elem, i) {
  console.log("i:", i, "/ elem:", elem);
})