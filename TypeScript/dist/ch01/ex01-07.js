"use strict";
(() => {
    console.log("==========타입 별칭으로 객체의 타입 선언==========");
    //객체 생성
    var user1 = { name: '김철수', age: 30 };
    function printUser(user) {
        console.log(user.name, user.age);
    }
    printUser(user1);
})();
