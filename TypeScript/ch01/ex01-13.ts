(()=>{
  console.log("==========인덱스 시그니처==========");

  // 회원가입

  interface User {
    name: string,
    email: string,
    age: number,
    // phone?: string,
    // address?: string,
    // hobby?: string

    // 선택적 프로퍼티가 수십개일경우 하나씩 ?를 넣기도 어렵다
    // 인덱스 시그니처를 사용한다.
    [etc: string]: string | number;
    //기타값을 넣은 뒤 그 뒤에 타입을 지정한다.
  }

  var user1: User = {
    name: '김철수',
    email: 'kim@kim.com',
    age: 30,
    phone: '010.123.123',
    address: '서울시 어딘가',
    hobby: '독서'
  }

  var user2: User = {
    name: '이영희',
    email: 'lee@lee.com',
    age: 35
  }

  console.log(user1, user2);
})();

