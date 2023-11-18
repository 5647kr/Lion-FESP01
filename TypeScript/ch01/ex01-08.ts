(()=>{
  console.log("==========인터섹션 타입(intersection type)==========");

  // 타입 여러개를 하나로 합치기 위해 and 연산자(&)로 연결한 타입

  type list = {
    title: string,
    content: string
  }
  type listInfo = list & {
    id: number,
    done: boolean
  }

  var todo1: list = {
    title: '할일1',
    content: '할일1'
  }

  var todo2: listInfo = {
    id: 2,
    title: '할일2',
    content: '할일2',
    done: true
  }

  console.log(todo1)
  console.log(todo2)
})();