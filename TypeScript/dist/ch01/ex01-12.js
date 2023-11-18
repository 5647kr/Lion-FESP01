"use strict";
(() => {
    console.log("==========인터페이스 정의==========");
    var todo1 = {
        id: 1,
        title: '할일1',
        content: '할일1',
        done: false
    };
    var todo2 = {
        id: 2,
        title: '할일2',
        content: '할일2',
        //done이 없기 때문에 error
    };
    console.log(todo1);
    console.log(todo2);
    var togglefuc = function (param) {
        param.done = !param.done;
    };
    //todo1.id = 3; //! id는 변화면 안되는 값이다 -> interface로
    todo1.title = '집에 가자';
    togglefuc(todo1);
    console.log(todo1);
})();
