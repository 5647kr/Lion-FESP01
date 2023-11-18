(()=>{
  console.log("==========유니언 타입(union type)==========");

  // 여러 종류의 타입을 허용하기 위해 or연산자(|)로 연결한 타입

  function log1(msg: string): void {
    console.log(msg)
  }

  function log2(msg: number): void {
    console.log(msg)
  }

  log1('hello')
  log2(100)

  function log3(msg: number | string): void {
    console.log(msg)
  }

  log3('hello')
  log3(200)

  var msg1: string | number = 'world'
  var msg2: number | string = 300;

  log3(msg1)
  log3(msg2)

  msg1 = 400
  log3(msg1)
})();

