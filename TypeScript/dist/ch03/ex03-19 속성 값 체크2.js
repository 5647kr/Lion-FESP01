"use strict";
(() => {
    console.log("========== 속성 값 체크2 ==========");
    const kim = {
        name: "김철수",
        age: 30,
        nickname: "철수"
    };
    const lee = {
        name: "이영희",
        age: "비공개"
    };
    const hong = {
        name: "홍길동"
    };
    function printUser(user) {
        // User 타입일 경우 나이 출력
        if (isUser(user)) {
            console.log(user.nickname);
        }
    }
    // 타입 가드 함수
    function isUser(user) {
        return typeof user.age === "number";
    }
    printUser(kim);
    printUser(lee);
    printUser(hong);
})();
