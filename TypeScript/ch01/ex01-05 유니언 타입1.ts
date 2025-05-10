(() => {
  console.log("========== 유니언 타입(union type) ==========");

  // 여러 종류의 타입을 허용하기 위해 or연산자(|)로 연결한 타입

  function fuc1(msg: string): void {
    console.log("fuc1:", msg);
  }

  function fuc2(msg: number): void {
    console.log("fuc2:", msg);
  }

  fuc1("hello");
  fuc2(100);

  function fuc3(msg: number | string): void {
    console.log("fuc3:", msg);
  }

  fuc3("hello");
  fuc3(200);

  var msg1: string | number = "world";
  var msg2: number | string = 300;

  fuc3(msg1);
  fuc3(msg2);

  msg1 = 400;
  fuc3(msg1);
})();
