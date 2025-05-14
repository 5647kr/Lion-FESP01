(() => {
  console.log("========== 매핑 수정자 ==========");

  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  type optionalTodo<T> = {
    // 1. 하드 코딩
    // id?: number;
    // title?: string;
    // content?: string;

    // 2. mapped
    // [p in "id" | "title" | "content"]?: Todo[p]

    // 3. keyof
    // [p in keyof Todo]?: Todo[p]

    // 4. 제네릭
    [P in keyof T]?: T[P];
  };

  // todo1
  const todo1: Todo = {
    id: 1,
    title: "할일 1",
    content: "내용 1",
  };

  console.log("todo1:", todo1);

  // todo1
  const todo2: optionalTodo<Todo> = {
    title: "할일 2",
    content: "내용 2",
  };

  console.log("todo2:", todo2);
})();
