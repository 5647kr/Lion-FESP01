console.log("========== 배열 메소드 ==========");

var arr1 = [300, 400];


console.log("----- push -----");

// push: 배열의 마지막에 새로운 요소 추가.
arr1[2] = 500;
console.log("arr1[2] = 500:", arr1);

arr1.push(600);
console.log("arr1.push(600):", arr1);


console.log("----- unshift -----");

// unshift: 배열의 처음에 새로운 요소 추가.
// arr1[0] = 200; //*덮어씌우기

arr1.unshift(200);
console.log("arr1.unshift(200):", arr1);

arr1.unshift(100);
console.log("arr1.unshift(100):", arr1);


console.log("----- pop -----");

// pop: 배열의 마지막 요소를 제거 후 반환

// 원본은 살리고 마지막 요소만 반환한다.
console.log("arr1[arr1.length - 1]:", arr1[arr1.length - 1]);
console.log("arr1:", arr1);

// 원본에서 마지막 요소를 제거 후 반환한다.
console.log("arr1.pop():", arr1.pop());
console.log("arr1:", arr1);


console.log("----- shift -----");

// shift: 배열의 첫번째 요소를 제거 후 반환

console.log("arr1.shift():", arr1.shift());
console.log("arr1:", arr1);