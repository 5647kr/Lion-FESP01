(() => {
  console.log("========== Partial ==========");

  // type의 모든 속성을 옵셔널로 설정한 타입을 생성한다.(옵셔널 프로퍼티 추가)

  interface Todo {
    title: string;
    content: string;
  }

  // todo1
  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };

  console.log("todo1:", todo1);

  // todo2
  const todo2: Partial<Todo> = {
    title: "할일 2",
  };

  console.log("todo2:", todo2);

  // 예시
  const extodo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };

  const extodo2: Partial<Todo> = {
    content: "내용 2",
  };

  const extodo3: Partial<Todo> = {
    title: "할일 3",
  };

  function updateTodo(todo: Todo, newTodo: Partial<Todo>) {
    return { ...todo, ...newTodo };
  }

  console.log(updateTodo(extodo1, extodo2));
  console.log(updateTodo(extodo1, extodo3));
})();
