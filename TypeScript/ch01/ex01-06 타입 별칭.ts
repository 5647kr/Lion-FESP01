(() => {
  console.log("========== 타입 별칭(type alias) ==========");

  // 타입을 변수에 저장해서 사용한다. 또한 대문자를 사용하여 작성한다.

  type Message = string | number;

  function fuc1(msg: Message): void {
    console.log("fuc1:", msg);
  }

  fuc1("hello");
  fuc1(200);

  var msg1: Message = "world";
  var msg2: Message = 300;

  fuc1(msg1);
  fuc1(msg2);

  msg1 = 400;
  fuc1(msg1);
})();
