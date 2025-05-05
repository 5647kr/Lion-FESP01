// ex03-13.ts 복사
(()=>{
  console.log("========== 타입 단언3 ==========");

  // {} 타입 추론
  // var todo1 = {};
  // todo1.title = "할일 1";

  var todo1 = {} as Todo;
  todo1.title = "할일 1";


  // {title: string} 타입 추론
  // var todo2 = {
  //   title: "할일2",
  // };

  // todo2.content = "내용 2";

  var todo2 = {
    title: "할일2",
  } as Todo;

  todo2.content = "내용 2";


  var todo3 = {
    title: "할일 3",
    content: "내용 3",
  };
  todo3.content = "수정 3";

  console.log("todo1:", todo1);
  console.log("todo2:", todo2);
  console.log("todo3:", todo3);



  // 처음부터 TS로 만들면,

  interface Todo {
    title: string,
    content: string;
  }

  const todo4: Todo = {
    title: "할일 4",
    content: "내용 4"
  }

  console.log("todo4:", todo4);
})();