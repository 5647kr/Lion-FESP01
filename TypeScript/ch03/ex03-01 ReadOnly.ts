(() => {
  console.log("========== ReadOnly ==========");

  // type의 모든 속성을 readonly로 설정한 타입을 생성한다.

  interface Todo {
    title: string;
    content: string;
  }

  // todo1
  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };

  todo1.title = "수정 1";

  console.log("todo1:", todo1);

  // todo2
  const todo2: Readonly<Todo> = {
    title: "할일 2",
    content: "내용 2",
  };

  // todo2.title = "수정 1"; error

  console.log("todo2:", todo2);
})();
