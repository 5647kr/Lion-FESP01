"use strict";
(() => {
    console.log("==========인터섹션 타입(intersection type)==========");
    var todo1 = {
        title: '할일1',
        content: '할일1'
    };
    var todo2 = {
        id: 2,
        title: '할일2',
        content: '할일2',
        done: true
    };
    console.log(todo1);
    console.log(todo2);
})();
