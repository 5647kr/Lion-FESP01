(() => {
  console.log("========== 인터페이스 정의 ==========");

  // 정의하는 속성의 종류
  /**
   * 객체의 속성과 속성의 타입 정의
   * 메소드의 매개 변수와 리턴 타입 정의
   * 익명 함수의 매개 변수와 리턴 타입 정의
   */

  //! 선택적 프로퍼티
  interface List {
    readonly id: number; //수정할 수 없고 오로지 읽기만 가능하다.
    title: string;
    content: string;
    done?: boolean;
    // done을 받을지 말지 ?로 붙여 결정한다.
  }

  //익명함수를 위한 인터페이스 정의
  interface Toggle {
    (param: List): void;
  }

  var todo1: List = {
    id: 1,
    title: "할일1",
    content: "할일1",
    done: false,
  };

  var todo2: List = {
    id: 2,
    title: "할일2",
    content: "할일2",
    //done이 없기 때문에 error
  };

  console.log("todo1:", todo1);
  console.log("todo2:", todo2);

  var togglefuc: Toggle = function (param: List): void {
    param.done = !param.done;
  };

  //todo1.id = 3; // id는 변화면 안되는 값이다 -> interface로
  todo1.title = "집에 가자";

  togglefuc(todo1);
  console.log("todo1:", todo1);
})();
