console.log("========== 생성자 함수1 ==========");

// 객체를 생성해서  반환하는 함수(생성자)

function Person1(name, age) {
  var obj1 = {}
  obj1.name = name;
  obj1.age = age;
  obj1.getName = function() {
    return this.name;
  };
  
  return obj1;
}

var kim = Person1("김철수", 30)
var lee = Person1("이영희", 35)
var hong = Person1("홍길동", 40)

console.log("kim.age:", kim.age);
console.log("kim.getName():", kim.getName());
console.log("lee.age:", lee.age);
console.log("lee.getName():", lee.getName());
console.log("hong.age:", hong.age);
console.log("hong.getName():", hong.getName());


console.log("========== 생성자 함수2 ==========");


function Person2(name, age) {
  // var obj1 = {}

  if(!(this instanceof Person2)) {
    return new Person2(name, age)
  }

  this.name = name;
  this.age = age;
  this.getName = function() {
    return this.name;
  };
  
  // return obj1;
}

var kim = new Person2("김철수", 30)
var lee = new Person2("이영희", 35)
var hong = Person2("홍길동", 40)

console.log("kim.age:", kim.age);
console.log("kim.getName():", kim.getName());
console.log("lee.age:", lee.age);
console.log("lee.getName():", lee.getName());
console.log("hong.age:", hong.age);
console.log("hong.getName():", hong.getName());
