"use strict";
(() => {
    console.log("========== 선택적 파라미터(optional para) ==========");
    // 함수의 매개 변수를 선택적으로 전달 받고 싶을 때 매개변수명 뒤 ?를 추가한다.
    function user1(name, age) {
        console.log("user1.name", name);
        console.log("user1.age", age);
    }
    user1("김철수", 30);
    // user1('이영희') //!Error
    function user2(name, age) {
        console.log("user2.name", name);
        console.log("user2.age", age);
    }
    user2("김철수", 30);
    user2("이영희");
})();
