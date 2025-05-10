"use strict";
(() => {
    console.log("========== 유니언 타입(union type)과 타입 가드 ==========");
    function fuc1(msg) {
        if (typeof msg === "string") {
            //* 타입 가드
            console.log(`${msg} 글자 수: ${msg.length}`);
        }
        else if (typeof msg === "number") {
            console.log(`${msg} + 10 = ${msg + 10}`);
        }
        else {
            console.log(`${msg} : ${msg ? "참" : "거짓"}`);
        }
    }
    fuc1("world");
    fuc1(100);
    fuc1(false);
})();
