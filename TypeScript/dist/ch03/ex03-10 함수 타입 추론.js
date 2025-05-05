"use strict";
(() => {
    console.log("========== 함수 타입 추론 ==========");
    // 타입을 지정하지 않아 any타입으로 지정된다.
    function addFuc1(num) {
        return num + 10;
    }
    function addFuc2(num) {
        return num + 10;
    }
    function addFuc3(num) {
        return num + "10";
    }
    function addFuc4(num = 10) {
        return num + "10";
    }
    function addFuc5(num) {
        let num2;
        // num2 = 100;
        if (num === 10) {
            return "num은 10";
        }
        else if (num === 20) {
            return 20;
        }
        else if (num === 30) {
            return 30;
        }
        else {
            return num2;
        }
    }
    const result1 = addFuc1(100);
    const result2 = addFuc2(100);
    const result3 = addFuc3(100);
    const result4 = addFuc4();
    const result5 = addFuc5(10);
    const result6 = addFuc5(20);
    const result7 = addFuc5(30);
    const result8 = addFuc5(40);
    const str = {
        a: "bye",
        // b: "heelo", error
        b: "hello",
        c: "world"
    };
})();
