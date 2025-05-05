"use strict";
(() => {
    console.log("========== Partial ==========");
    // todo1
    const todo1 = {
        title: "할일 1",
        content: "내용 1",
    };
    console.log("todo1:", todo1);
    // todo2
    const todo2 = {
        title: "할일 2",
    };
    console.log("todo2:", todo2);
    // 예시
    const extodo1 = {
        title: "할일 1",
        content: "내용 1",
    };
    const extodo2 = {
        content: "내용 2",
    };
    const extodo3 = {
        title: "할일 3",
    };
    function updateTodo(todo, newTodo) {
        return Object.assign(Object.assign({}, todo), newTodo);
    }
    console.log(updateTodo(extodo1, extodo2));
    console.log(updateTodo(extodo1, extodo3));
})();
