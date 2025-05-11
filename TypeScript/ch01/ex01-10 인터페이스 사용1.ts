(() => {
  console.log("========== 인터페이스 사용1 ==========");
  // 변수, 함수의 매개변수, 함수의 리턴 타입

  interface User1 {
    name: string;
    age: number;
  }

  // 1. 변수에 타입 지정
  var user1: User1 = { name: "김철수", age: 30 };
  console.log("user1:", user1);

  // 2. 함수 매개 변수에 타입 지정
  var getAge = function (user1: User1) {
    return user1.age;
  };

  // 3. 함수의 리턴 타입 지정
  var createUser = function (name: string, age: number): User1 {
    return { name, age };
  };

  // 타입추론에 의해 자동으로 타입이 할당됨으로 따로 변수에 타입을 지정하지 않아도 된다.
  var kim: User1 = createUser("이경이", 35);
  //변수까지 타입 지정은 하지 않아도 된다.
  console.log(getAge(kim));
})();
