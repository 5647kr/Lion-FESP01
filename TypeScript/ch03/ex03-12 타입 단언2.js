(() => {
  console.log("========== 타입 단언2 ==========");

  var todo1 = {};
  todo1.title = "할일 1";

  var todo2 = {
    title: "할일2",
  };

  todo2.content = "내용 2";

  var todo3 = {
    title: "할일 3",
    content: "내용 3",
  };

  console.log("todo1:", todo1);
  console.log("todo2:", todo2);
  console.log("todo3:", todo3);
})();
