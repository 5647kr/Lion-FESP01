(() => {
  console.log("========== 타입 별칭으로 객체의 타입 선언 ==========");

  // 객체의 속성명과 속성값의 타입을 지정

  // 객체의 타입 선언
  // , 또는 ; 둘다 사용 가능하다.
  type User1 = {
    name: string;
    age: number;
  };
  type User2 = {
    name: string;
    age: number;
  };

  //객체 생성
  var user1: User1 = { name: "김철수", age: 30 };

  function fuc1(user: { name: string; age: number }): void {
    console.log("user1.name:", user.name);
    console.log("user1.age:", user.age);
  }

  function fuc2(user: User2): void {
    console.log("user2.name:", user.name);
    console.log("user2.age:", user.age);
  }

  fuc1(user1);
  fuc2(user1);
})();
