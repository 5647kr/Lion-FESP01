(() => {
  console.log("========== 인터페이스 상속 계층 구조 ==========");

  interface List1 {
    title: string;
    content: string;
  }

  interface List2 extends List1 {
    readonly id: number;
    done?: boolean;
  }

  interface List3 extends List2 {
    createAt: Date; // 생성자 함수도 타입으로 지정 가능
    updateAt: Date;
  }

  var todo1: List1 = {
    title: "할일1",
    content: "할일1",
  };

  var todo2: List2 = {
    id: 2,
    title: "할일2",
    content: "할일2",
  };

  var todo3: List3 = {
    id: 3,
    title: "할일3",
    content: "할일3",
    done: true,
    createAt: new Date(),
    updateAt: new Date(),
  };

  console.log("todo1:", todo1);
  console.log("todo2:", todo2);
  console.log("todo3:", todo3);
})();
