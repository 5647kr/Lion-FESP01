(() => {
  console.log("========== 인터섹션 타입(intersection type) ==========");

  // 타입 여러개를 하나로 합치기 위해 and 연산자(&)로 연결한 타입

  type List = {
    title: string;
    content: string;
  };

  var todo1: List = {
    title: "할일1",
    content: "할일1",
  };


  // 타입 확장
  type ListInfo = List & {
    id: number;
    done: boolean;
  };

  var todo2: ListInfo = {
    id: 2,
    title: "할일2",
    content: "할일2",
    done: true,
  };

  console.log("todo1:", todo1);
  console.log("todo2:", todo2);
})();
