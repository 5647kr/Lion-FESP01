"use strict";
(() => {
    console.log("==========타입 별칭(type alias)==========");
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
