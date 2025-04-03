// 기본타입(Primitive Type)

// 숫자(Number), 문자열(String), 논리값(Boolean), null, undefined, Bigint, Symbol이 있다.


//* 숫자(Number)

// 정수, 실수, 음수, 양수 구별이 없다

console.log("숫자[Number]: ", typeof 10, 10);
console.log("숫자[Number]: ", typeof 3.14, 3.14);


//* 문자열(String)

// 큰 따옴표(""), 작은 따옴표('')안에 기술한다.

//! 따옴표 안에 따옴표 작성
console.log("문자열[String]: ", "김철수가 '안녕'이라고 말했다");
console.log("문자열[String]: ", '김철수가 "안녕"이라고 말했다');
console.log("문자열[String]: ", "김철수가 \"안녕\"이라고 말했다");
console.log("문자열[String]: ", `김철수가 "안녕"이라고 말했다`);
//console.log("김철수가 "안녕"이라고 말했다"); //!Error


//* 논리값(Boolean)

// 참(true) 또는 거짓(false) 둘 중 하나의 값을 가지는 데이터이다
//! 헷갈리는 Bloonean 값 

console.log("논리값: ", null == undefined);
console.log("논리값: ", null === undefined);
console.log("논리값: ", true == 1);
console.log("논리값: ", true === 1);


//* null

// 명시적으로 값이 없음을 나타낸다
//! 데이터 타입은 Object이다.

var nullVal = null;
console.log("null: ", typeof nullVal, nullVal);


//* undefined

// 값이 없음을 나타낸다.
//! 값이 할당되지 않은 변수의 타입과 값 모두 undefined로 지정한다.

var undefinedValue;
console.log("undefined: ", typeof undefinedValue, undefinedValue);

// typeof는 항상 문자열을 반환한다.