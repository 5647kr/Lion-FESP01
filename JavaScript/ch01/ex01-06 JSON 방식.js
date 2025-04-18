//* JSON 표기방법
console.log("========== JSON 표기방법 ==========");

var obj1 = {
  name: 'lee',
  age: 35,
  job: 'teacher',
  married: true
};

//! 속성명에 '', ""를 붙이지 않아도 된다.
console.log("type:", typeof obj1, "/ value:", obj1);
console.log("obj1['name']:", obj1['name']);
console.log("obj1.age:", obj1.age);
console.log("obj1.job:", obj1.job);
console.log("obj1.['married']:", obj1['married']);


console.log("----- 객체 -> 문자열 -----");
// 객체를 문자열로 변환
var objStr = JSON.stringify(obj1);

console.log("type:", typeof objStr);
console.log("objStr:", objStr);
console.log("objStr.age:", objStr.age);


console.log("----- 문자열 -> 객체 -----");
//문자열을 객체로 변환
var strObj = JSON.parse(objStr);

console.log("type:", typeof strObj);
console.log("strObj:", strObj);
console.log("strObj.age:", strObj.age);