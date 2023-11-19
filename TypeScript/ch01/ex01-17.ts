(function(){
  console.log("==========인터페이스 재선언(선언 병합)==========");

  // 동일한 이름의 인터페이스를 중복으로 선언하여 
  // 기존 인터페이스에 없는 속성을 추가하여 확장한다.

  //! 가독성이 떨어진다.
  // 타입별칭은 재선언이 안된다.

  interface list1 {
    id: number,
    done: boolean
  }

  interface list1 {
    title: string,
    content: string
  }

  var todo1: list1 = {
    id: 1,
    title: '할일1',
    content: '할일1',
    done: true
  }

  console.log(todo1)

  //!Error

  // type list2 = {
  //   id: number,
  //   done: boolean
  // }

  // type list2 = {
  //   title: string,
  //   content: string
  // }
})();
