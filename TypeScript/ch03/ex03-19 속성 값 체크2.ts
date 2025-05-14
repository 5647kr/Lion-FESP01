(() => {
  console.log("========== 속성 값 체크2 ==========");

  const kim: User = {
    name: "김철수",
    age: 30,
    nickname: "철수",
  };

  const lee: UnknownUser = {
    name: "이영희",
    age: "비공개",
  };

  const hong: Admin = {
    name: "홍길동",
  };

  function printUser(user: User | UnknownUser | Admin) {
    // User 타입일 경우 나이 출력
    if (isUser(user)) {
      console.log(user.nickname);
    }
  }

  // 타입 가드 함수
  function isUser(user: User | UnknownUser | Admin): user is User {
    return typeof (user as User).age === "number";
  }

  printUser(kim);
  printUser(lee);
  printUser(hong);
})();
