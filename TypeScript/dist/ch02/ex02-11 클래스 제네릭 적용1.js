"use strict";
(() => {
    console.log("========== 클래스에 제네릭 적용 ==========");
    class Queue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    var stringQ = new Queue();
    stringQ.push("hello");
    stringQ.push("js");
    stringQ.push("world");
    var str1 = stringQ.pop();
    var str2 = stringQ.pop();
    var str3 = stringQ.pop();
    console.log(str1, str2, str3);
})();
