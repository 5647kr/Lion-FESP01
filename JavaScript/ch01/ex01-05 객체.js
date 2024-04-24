//* 참조 타입(Refrence Type)

// 객체(Object) - 배열, 함수, 날짜, 정규표현식 etc

// key-value쌍의 데이터 집합(속성, property)
// 속성값으로 모든 데이터 타입 지정이 가능하며,
//! 값으로 함수가 지정된 속성을 메소드(method)라 한다.


// object 생성자 함수

var obj1 = new Object();
obj1.name = 'lee';
obj1['age'] = 30;
obj1.job = 'student';
obj1['married'] = false;

console.log(obj1['name'], obj1.age, obj1.job, obj1['married']);
console.log(typeof obj1, obj1);

//! 속성을 추가할때 반드시 []를 사용해야 하는 경우
// obj[user-age] '-'가 포함된 경우
// 속성명이 변수에 저장된 경우

var obj2 = new Object();
var name = 'kim';
obj2.name = 'lee';
obj2[name] = 'park'

console.log(obj2.name, obj2.kim);
