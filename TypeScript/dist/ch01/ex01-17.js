"use strict";
(function () {
    console.log("==========인터페이스 재선언(선언 병합)==========");
    var todo1 = {
        id: 1,
        title: '할일1',
        content: '할일1',
        done: true
    };
    console.log(todo1);
    //!Error
    // type list2 = {
    //   id: number,
    //   done: boolean
    // }
    // type list2 = {
    //   title: string,
    //   content: string
    // }
})();
