(() => {
  console.log("========== 인터페이스로 객체의 타입 선언 ==========");

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
