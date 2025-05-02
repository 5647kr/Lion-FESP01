"use strict";
(() => {
    console.log("========== 타입 별칭(type alias) ==========");
    function fuc1(msg) {
        console.log("fuc1:", msg);
    }
    fuc1("hello");
    fuc1(200);
    var msg1 = "world";
    var msg2 = 300;
    fuc1(msg1);
    fuc1(msg2);
    msg1 = 400;
    fuc1(msg1);
})();
