console.log("----------나머지 매개변수1----------");

// 함수의 매개변수에 적용(마지막 매개변수 하나만 사용 가능)

function fn1(a, b, ...rest) {
  console.log(a, b, rest);
}

fn1();
fn1(1);
fn1(2, 3);
fn1(4, 5, 6);
fn1(7, 8, 9, 10, 11);

// 마지막 매개변수 하나만 사용 가능하다.
function fn2(a, b, ...args) {}
//function fn2(a, b, ...args, c) {}//!Error
//function fn2(a, b, ...args, ...arg) {} //!Error

console.log("----------나머지 매개변수2----------");

// 구조 분해 할당에서 사용
var [first, second, ...last] = [100, 200, 300, 400, 500];
console.log(first, second, last);

console.log("----------나머지 매개변수3----------");

// 객체에서 사용가능하다
var user = {
  name: '김철수', 
  age: 30,
  phone: '0102223333',
  address: '서울특별시 종로구 종로3길 17 D타워, 16-17층 (주)멋쟁이사자처럼'
};

var {name, age, ...etc} = user;
console.log(name, age, etc.phone, etc.address);