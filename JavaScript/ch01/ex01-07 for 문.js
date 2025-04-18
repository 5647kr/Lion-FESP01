//* 객체의 모든 속성 접근

console.log("========== for in 구문 ==========");
// for in 구문
// for (var prop in obj) {};

console.log(`for (var prop in obj) {};`)

var obj1 = {
  name: 'obj1',
  major: 'computer science'
};


console.log("----- 객체 프로퍼티 읽기 -----");
// 객체 프로퍼티 읽기
console.log("obj1.name:", obj1.name);
console.log("obj1['major']:", obj1['major']);
console.log("obj1.sub:", obj1.sub);


console.log("----- 객체 프로퍼티 갱신 -----");
// 객체 프로퍼티 갱신
obj1.major = 'electronic engineering';

console.log("obj1.name:", obj1.name);
console.log("obj1['major']:", obj1['major']);
console.log("obj1.sub:", obj1.sub);


console.log("----- 객체 프로퍼티 동적 생성 -----");
// 객체 프로퍼티 동적 생성
obj1.sub = 'computer engineering';

console.log("obj1.name:", obj1.name);
console.log("obj1['major']:", obj1['major']);
console.log("obj1.sub:", obj1.sub);


console.log("----- 객체 프로퍼티 삭제 -----");
// 객체 프로퍼티 삭제
delete obj1.major;
console.log("obj1.name:", obj1.name);
console.log("obj1['major']:", obj1['major']);
console.log("obj1.sub:", obj1.sub);


console.log("----- 객체 모든 프로퍼티 읽기 -----");
// 객체 모든 프로퍼티 읽기
for(var prop in obj1){
  console.log("prop:", prop, "/ obj1[prop]:", obj1[prop]);
}






