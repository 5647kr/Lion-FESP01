console.log("========== 배열 프로퍼티 생성 ==========");
// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for(var i=0; i<arr.length; i++){
    console.log(`i: ${i} / arr[${i}]: ${arr[i]}`);
  }
}

// 지정한 객체의 모든 속성을 출력한다.
function printObj(obj){
  for(var prop in obj) {
    console.log("forIn문:", prop, obj[prop]);
  }
}

//! for-in문 에는 length가 나오지 않는다.

var arr = ['zero', 'one', 'two'];
arr.push('three');
arr.push('four');
arr.pop();
arr.shift();

// 일반 객체처럼 속성 추가
arr.name = 'kim';
//! 속성은 추가되었지만 console.log에는 출력되진 않았다.


// 대입연산자로 속성 추가. enumerable, writable, configurable true로 설정됨
arr['age'] = 30;


// 속성 추가 전용 메소드: defineProperty(enumerable, writable, configurable)
// default: false

// 첫번째 인자: 속성을 추가할 객체
// 두번째 인자: 속성명
// 세번째 인자: 옵션

Object.defineProperty(arr, 'age', {
  value: 30,
  enumerable: true, //열거 가능 여부(for-in, object.keys(), object.values())
  writable: true, // 수정 가능 여부(상수형 변수, const)
  configurable:true // Object.defineProperty로 속성값 설정이 가능한지 여부
})


//* 2개 주석 처리하면서 비교하기
printArr(arr);
printObj(arr);
