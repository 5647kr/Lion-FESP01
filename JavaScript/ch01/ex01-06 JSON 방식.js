//* JSON 표기방법

var obj1 = {
  name: 'lee',
  age: 35,
  job: 'teacher',
  married: true
};

//! 속성명에 '', ""를 붙이지 않아도 된다.

console.log(obj1['name'], obj1.age, obj1.job, obj1['married']);
console.log(typeof obj1, obj1);

// 객체를 문자열로 변환
var strObj1 = JSON.stringify(obj1);
console.log(typeof strObj1, strObj1, strObj1.age);

//문자열을 객체로 변환
var objObj1 = JSON.parse(strObj1);
console.log(typeof objObj1, objObj1, objObj1.age);