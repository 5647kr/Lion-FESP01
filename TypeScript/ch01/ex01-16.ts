(function(){
  console.log("==========인터페이스 다중 상속==========");

  interface listItem {
    title: string,
    content: string
  }

  interface list {
    id: number,
    title: string,
    done: boolean
  }

  //인터페이스 다중 상속

  interface listInfo extends listItem, list {
    createAt: Date,
    updateAt: Date,
  }

  var todo1: listItem = {
    title: '할일1',
    content: '할일1'
  }

  var todo2: listInfo = {
    id: 2,
    title: '할일2',
    content: '할일2',
    done: true,
    createAt: new Date(),
    updateAt: new Date(),
  }

  console.log(todo1)
  console.log(todo2)
})();

