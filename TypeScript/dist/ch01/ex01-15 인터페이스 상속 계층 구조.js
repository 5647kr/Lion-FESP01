"use strict";
(() => {
    console.log("========== 인터페이스 상속 계층 구조 ==========");
    var todo1 = {
        title: "할일1",
        content: "할일1",
    };
    var todo2 = {
        id: 2,
        title: "할일2",
        content: "할일2",
    };
    var todo3 = {
        id: 3,
        title: "할일3",
        content: "할일3",
        done: true,
        createAt: new Date(),
        updateAt: new Date(),
    };
    console.log("todo1:", todo1);
    console.log("todo2:", todo2);
    console.log("todo3:", todo3);
})();
