"use strict";
(() => {
    console.log("========== 타입 별칭으로 객체의 타입 선언 ==========");
    //객체 생성
    var user1 = { name: "김철수", age: 30 };
    function fuc1(user) {
        console.log("user1.name:", user.name);
        console.log("user1.age:", user.age);
    }
    function fuc2(user) {
        console.log("user2.name:", user.name);
        console.log("user2.age:", user.age);
    }
    fuc1(user1);
    fuc2(user1);
})();
