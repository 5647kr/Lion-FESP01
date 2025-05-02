"use strict";
(() => {
    console.log("========== 인터페이스로 객체의 타입 선언 ==========");
    //객체 생성
    var user1 = { name: "김철수", age: 30 };
    function printUser(user) {
        console.log("user1.name:", user.name);
        console.log("user1.age:", user.age);
    }
    printUser(user1);
})();
