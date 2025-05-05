"use strict";
(() => {
    console.log("========== Required ==========");
    // todo1
    const todo1 = {
        id: "1",
        title: "할일 1",
        content: "내용 1"
    };
    console.log("todo1:", todo1);
    // console.log("todo1:", todo1.content.substring(1, 2)); error
    // content에 값이 있더라도 옵셔널 프로퍼티이기 때문에 undefined일 경우가 있어 error가 발생한다.
    // todo2
    // 항상 들어가야 하는 속성을 설정한다.
    const todo2 = {
        id: "2",
        title: "할일 2",
        // contents: "내용 2", error
        content: "내용 2"
    };
    console.log("todo2:", todo2);
    console.log("todo2:", todo2.content.substring(1, 2));
})();
