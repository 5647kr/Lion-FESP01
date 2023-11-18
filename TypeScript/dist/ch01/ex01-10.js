"use strict";
(() => {
    console.log("==========인터페이스 사용==========");
    // 변수에 타입 지정
    var user1 = { name: '김철수', age: 30 };
    // 함수 매개 변수에 타입 지정
    var getAge = function (user1) {
        return user1.age;
    };
    // 함수의 리턴 타입 지정
    var createUser = function (name, age) {
        return { name, age };
    };
    var kim = createUser('이경이', 35);
    //변수까지 타입 지정은 하지 않아도 된다.
    console.log(getAge(kim));
})();
