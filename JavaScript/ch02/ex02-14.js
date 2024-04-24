console.log("----------This----------");

// 함수를 호출한 객체에 대한 참조
//! 함수 내부의 this는 window 객체이다.
//함수를 객체의 속성으로 부여하면 이를 메소드라 한다.
//객체.메소드명()으로 호출하는데 이때 this는 메소드를 정의한 객체이다.

var foo = function () {
  console.log(this);
  return 'i am foo';
};

var name = 'global';
function returnName(){
	return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = '김철수';
kim.age = 30;
kim.getName = returnName;

var lee = {
  name: '이영희',
  age: 40,
  getName: returnName
};

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());

// -> ch01-12

console.log("----------apply, call----------");

// apply
// 두개의 매개변수를 가진다
// 1번째는 this로 사용할 객체를 전달
// 2번째는 함수에 전달한 인자값의 배열
//ex) 함수.apply(kim[10, 20])

// call
// 여러개의 매개변수를 가진다
// 1번째는 this로 사용할 객체를 전달
// 2번째는 함수에 전달한 인자값을 차례로 지정
//ex) 함수.call(kim, 10, 20)

console.log(kim.getName(), kim.getName());
console.log(lee.getName(), lee.getName());
console.log(returnName(), returnName());

console.log(kim.getName(), kim.getName.call(window));
console.log(lee.getName(), lee.getName.apply(kim));
console.log(returnName(), returnName.call(lee));

// -> ch02-05