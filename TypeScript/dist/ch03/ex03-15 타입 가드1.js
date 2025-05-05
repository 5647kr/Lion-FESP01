"use strict";
(() => {
    console.log("========== 타입 가드1 ==========");
    console.log("typeof 10:", typeof 10);
    console.log("typeof hello:", typeof "hello");
    console.log("typeof false:", typeof false);
    console.log("typeof new Function():", typeof new Function());
    console.log("typeof undefined:", typeof undefined);
    console.log("typeof null:", typeof null);
    console.log("typeof {}:", typeof {});
    console.log("typeof []:", typeof []);
    console.log("typeof new Date():", typeof new Date());
    function print(msg) {
        if (typeof msg === "string") {
            console.log("msg.length:", msg.length);
        }
        else if (typeof msg === "number") {
            console.log("msg.toFixed(2):", msg.toFixed(2));
        }
    }
    print("hello");
    print(3.14);
})();
