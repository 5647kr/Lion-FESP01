"use strict";
(() => {
    console.log("========== 타입 가드2 ==========");
    console.log(new Function() instanceof Function);
    console.log({} instanceof Object);
    console.log([] instanceof Array);
    console.log([] instanceof Object);
    console.log([] instanceof Date);
    console.log([] instanceof Function);
    console.log(new Date() instanceof Date);
    class Todo {
        constructor(title, content) {
            this.title = title,
                this.content = content;
        }
        getTitle() {
            return this.title;
        }
    }
    function getTitle(todo) {
        // 타입 가드를 적용해서 title값을 리턴하는 함수 작성
        if (todo instanceof Todo) {
            return todo.getTitle();
        }
        else if (todo instanceof Array) {
            return todo[0];
        }
    }
    const todo1 = new Todo("할일1", "내용1");
    const todo2 = ["할일2", "내용2"];
    console.log("todo1:", getTitle(todo1));
    console.log("todo2:", getTitle(todo2));
})();
