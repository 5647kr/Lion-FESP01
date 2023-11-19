(function(){
  console.log("==========인터페이스 상속==========");

  // class 선언부의 extends 키워드 뒤에 상속 받을 부모 클래스 지정한다.

  interface list {
    title: string,
    content: string
  }

  interface listInfo extends list{
    readonly id: number,
    // title: string,
    // content: string, 
    //! title과 content가 겹치니 listInfo에 list를 상속받는다.
    done?: boolean
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

  console.log(todo1)
  console.log(todo2)
})();

