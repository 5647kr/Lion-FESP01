"use strict";
(function () {
    console.log("==========인터페이스 다중 상속==========");
    var todo1 = {
        title: '할일1',
        content: '할일1'
    };
    var todo2 = {
        id: 2,
        title: '할일2',
        content: '할일2',
        done: true,
        createAt: new Date(),
        updateAt: new Date(),
    };
    console.log(todo1);
    console.log(todo2);
})();
