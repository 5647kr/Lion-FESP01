"use strict";
(() => {
    console.log("========== 타입 단언1 ==========");
    // var num1 = 10 as string; error
    var num2 = 10;
    console.log("num2:", num2);
    function numFuc1(num) {
        return num;
    }
    var returnNum = numFuc1(3.141592);
    console.log("returnNum:", returnNum.toFixed(2));
    var str1 = numFuc1("hello");
    console.log("str1:", str1.toUpperCase());
})();
