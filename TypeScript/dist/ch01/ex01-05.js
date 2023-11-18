"use strict";
(() => {
    console.log("==========유니언 타입(union type)==========");
    // 여러 종류의 타입을 허용하기 위해 or연산자(|)로 연결한 타입
    function log1(msg) {
        console.log(msg);
    }
    function log2(msg) {
        console.log(msg);
    }
    log1('hello');
    log2(100);
    function log3(msg) {
        console.log(msg);
    }
    log3('hello');
    log3(200);
    var msg1 = 'world';
    var msg2 = 300;
    log3(msg1);
    log3(msg2);
    msg1 = 400;
    log3(msg1);
})();
