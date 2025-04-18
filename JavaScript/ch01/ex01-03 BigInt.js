//* BigInt

console.log("========== BigInt(BigInt) ==========");
var maxNum = Number.MAX_VALUE; // Number로 표현할 수 있는 가장 큰 값
var maxSafeNum = Number.MAX_SAFE_INTEGER; // Number에서 안전하게 표현할 수 있는 가장 큰 정수

var bigInt1 = 12345n;
var bigInt2 = BigInt(maxSafeNum);

console.log("type:", typeof maxNum, "/ value:", maxNum);
console.log("type:", typeof maxSafeNum, "/ value:", maxSafeNum);
console.log("type:", typeof bigInt1, "/ value:", bigInt1);
console.log("type:", typeof bigInt2, "/ value:", bigInt2);


console.log("----- 큰 수의 계산1 -----");

console.log("maxSafeNum:", maxSafeNum);
console.log("maxSafeNum + 1:", maxSafeNum + 1);
console.log("maxSafeNum + 2:", maxSafeNum + 2);
console.log("maxSafeNum + 3:", maxSafeNum + 3);


console.log("----- 큰 수의 계산2 -----");

// Number.isSafeInteger: 안전한 범위안에 있는 숫자인지를 확인할 수 있다.
console.log("Number.isSafeInteger(maxSafeNum):", Number.isSafeInteger(maxSafeNum));
console.log("Number.isSafeInteger(maxSafeNum + 1):", Number.isSafeInteger(maxSafeNum + 1));


console.log("----- 큰 수의 계산3 -----");

console.log("bigInt2:", bigInt2);
console.log("bigInt2 + 1n:", bigInt2 + 1n);
console.log("bigInt2 + 2n:", bigInt2 + 2n);
console.log("bigInt2 + 3n:", bigInt2 + 3n);

//! number와 bigint끼리 산술연산이 불가능하다.