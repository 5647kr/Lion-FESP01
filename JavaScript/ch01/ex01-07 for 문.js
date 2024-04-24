//* 객체의 모든 속성 접근

// for in 구문
// for (var prop in obj) {};

var obj1 = {
  name: 'obj1',
  major: 'computer science'
};

// 객체 프로퍼티 읽기
console.log(obj1.name.toUpperCase(), obj1['major'], obj1.sub/*.toUpperCase()*/);
// toUpperCase(): 대문자로

// 객체 프로퍼티 갱신
obj1.major = 'electronic engineering';
console.log(obj1.name.toUpperCase(), obj1['major'], obj1.sub/*.toUpperCase()*/);

// 객체 프로퍼티 동적 생성
obj1.sub = 'computer engineering';
console.log(obj1.name.toUpperCase(), obj1['major'], obj1.sub/*.toUpperCase()*/);

// 객체 프로퍼티 삭제
delete obj1.major;
console.log(obj1.name.toUpperCase(), obj1['major'], obj1.sub/*.toUpperCase()*/);

// 객체 모든 프로퍼티 읽기
for(var prop in obj1){
  console.log(prop, obj1[prop]);
}






