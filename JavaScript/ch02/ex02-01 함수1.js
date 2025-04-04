console.log("==========함수==========");

console.log("==========일급 객체(first-class object)==========");

// 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다. 
// 함수의 인자로 전달할 수 있다.
// 함수의 결과 값으로 반환할 수 있다
// 리터럴로 생성할 수 있다
// 동적으로 생성된 프로퍼티를 가질 수 있다.

//! 함수는 일급 객체이다!

// 함수 == (호출+객체)
// 콜백함수, 고차함수, 클로저가 가능하다.

function 함수이름(매개변수목록) {
  //함수 본문
}

var num1 = 100;        // number
var str1 = 'hello';    // string
var obj1 = {};         // object
var arr1 = [num1, str1]; // object(array)

// 함수를 변수에 할당
var foo = function () {
  return 'i am foo';
};
console.log(foo);

// 함수를 배열의 요소로 할당
arr1.push(obj1);
console.log(arr1);
arr1.push(foo);
console.log(arr1);


// 함수를 객체의 속성으로 할당(메소드)
obj1.bar = foo;
obj1.baz = function () {
  return 'i am baz'
}
console.log(foo()); //foo에 정의된 함수를 호출해라
//! 함수 호출할땐 반드시 ()를 넣어야 한다.

console.log(foo(), obj1.bar(), arr1[3](), arr1[2].bar());
