"use strict";
(() => {
    console.log("========== 속성 값 체크 ==========");
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
        if ("age" in user && typeof user.age === "number") {
            console.log(user.nickname);
        }
    }
    printUser(kim);
    printUser(lee);
    printUser(hong);
})();
