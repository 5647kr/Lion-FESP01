"use strict";
(() => {
    console.log("========== 제네릭 타입 제약 ==========");
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo(new Date()));
})();
