(()=>{
  console.log("==========인터페이스 사용==========");
  // 변수, 함수의 매개변수, 함수의 리턴 타입

  interface User1 {
    name: string,
    age: number
  }

  // 변수에 타입 지정
  var user1: User1 = {name: '김철수', age: 30}
  console.log(user1)

  // 함수 매개 변수에 타입 지정
  var getAge = function (user1: User1) {
    return user1.age;
  }

  // 함수의 리턴 타입 지정

  var createUser = function (name: string, age: number): User1 {
    return {name, age}
  }

  var kim = createUser('이경이', 35);
  //변수까지 타입 지정은 하지 않아도 된다.
  console.log(getAge(kim))
})();
