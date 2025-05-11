(() => {
  console.log("========== 인터페이스로 객체의 타입 선언 ==========");

  // 객체의 타입을 정의하기 위해 사용한다.
  // 유니언 타입을 지정하거나, 인터섹션 타입을 지정하는 기능은 지원하지 않는다.

  interface User1 {
    name: string;
    age: number;
  }

  //객체 생성
  var user1: User1 = { name: "김철수", age: 30 };

  function printUser(user: User1): void {
    console.log("user1.name:", user.name);
    console.log("user1.age:", user.age);
  }
  printUser(user1);
})();
