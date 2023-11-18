(()=>{
  console.log("==========타입 별칭(type alias)==========");

  // 타입을 변수에 저장해서 사용한다

  type Message = string | number
  
  function log3(msg: Message): void {
    console.log(msg)
  }

  log3('hello')
  log3(200)

  var msg1: Message = 'world'
  var msg2: Message = 300;

  log3(msg1)
  log3(msg2)

  msg1 = 400
  log3(msg1)
})();