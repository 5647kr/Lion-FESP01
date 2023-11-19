(function(){
  console.log("==========인터페이스 상속 계층 구조==========");

  interface list {
    title: string,
    content: string
  }

  interface listInfo extends list{
    readonly id: number,
    done?: boolean
  }

  interface listInfoTime extends listInfo {
    createAt: Date,
    updateAt: Date,
  }

  var todo1: list = {
    title: '할일1',
    content: '할일1'
  }
  var todo2: listInfo = {
    id: 2,
    title: '할일2',
    content: '할일2'
  }
  var todo3: listInfoTime = {
    id: 3,
    title: '할일3',
    content: '할일3',
    done: true,
    createAt: new Date(),
    updateAt: new Date(),
  }

  console.log(todo1)
  console.log(todo2)
  console.log(todo3)
})();

