// prototype 사용하지 않고 생성자 함수 내부에 작성
var Person = function(name){
  this.name = name;
  this.getName = function () {
    return this.name;
  }
  this.setName = function (name) {
    this.name = name;
  }
};

var kim = new Person('김철수');
var lee = new Person('이영희');

console.log("kim.getName():", kim.getName());	// 김철수
console.log("kim.getName():", lee.getName());	// 이영희
kim.setName('홍길동');
console.log("kim.getName():", kim.getName());	// 홍길동

console.log("kim.getName === lee.getName:", kim.getName === lee.getName);	// false
console.log("kim.setName === lee.setName:", kim.setName === lee.setName);	// false