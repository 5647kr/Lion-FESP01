(() => {
  console.log("========== Pick ==========");

  // type에서 keys 속성을 선택해 타입을 생성한다.

  interface TodoInfoDetail {
    id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  type TodoRegist = Pick<TodoInfoDetail, "title" | "content">;
  type TodoInfo = Omit<TodoInfoDetail, "createdAt" | "updatedAt">;
  type TodoList = Omit<TodoInfo, "content">;

  var todo1: TodoRegist = {
    title: "할일1",
    content: "등록에 사용",
  };

  var todo2: TodoInfo = {
    id: 2,
    title: "할일2",
    content: "상세조회에 사용",
    done: true,
  };

  var todo3: TodoList = {
    id: 3,
    title: "할일3",
    done: true,
  };

  console.log("todo1:", todo1);
  console.log("todo2:", todo2);
  console.log("todo3:", todo3);
})();
