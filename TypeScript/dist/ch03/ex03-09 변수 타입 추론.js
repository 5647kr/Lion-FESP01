"use strict";
(() => {
    console.log("========== 변수 타입 추론 ==========");
    var str1 = "kim";
    var num1 = 1234;
    // 선언을 먼저 할 경우는 가능한 타입을 지정해야한다.
    var undefined1;
    // undefined1 = 100; error
    // 지정 하지 않으면 any타입이 되어 typescript 를 사용하는 의미가 사라진다.
    var undefined2;
    undefined2 = "김철수";
    undefined2 = 100;
    // 오타가 있어도 따로 error표시를 하지 않는다.
    const todo1 = {
        titel: "할일 1",
        content: "내용 1"
    };
    // 객체는 타입 별칭이나 인터페이스를 지정해야 안전하게 사용할 수 있다.
    const todo2 = {
        title: "할일 1",
        content: "내용 1"
    };
})();
