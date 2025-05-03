(() => {
  console.log("==========인터페이스 다중 상속==========");

  interface List1 {
    title: string,
    content: string
  }

  interface List2 {
    id: number,
    title: string,
    done: boolean
  }

  //인터페이스 다중 상속

  interface List3 extends List1, List2 {
    createAt: Date,
    updateAt: Date,
  }

  var todo1: List1 = {
    title: '할일1',
    content: '할일1'
  }

  var todo2: List3 = {
    id: 2,
    title: '할일2',
    content: '할일2',
    done: true,
    createAt: new Date(),
    updateAt: new Date(),
  }

  console.log("todo1:", todo1);
  console.log("todo2:", todo2);
})();

