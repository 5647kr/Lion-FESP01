(() => {
  console.log("========== 인터페이스 재선언(선언 병합) ==========");

  // 동일한 이름의 인터페이스를 중복으로 선언하여
  // 기존 인터페이스에 없는 속성을 추가하여 확장한다.

  //! 가독성이 떨어진다.

  // 객체의 타입을 지정할 경우 확장이 용이한 인터페이스 사용을 권장
  // 객체가 아닌 타입 별칭으로만 정의할 수 있는 경우에만 타입 별칭 사용을 권장

  interface List1 {
    id: number;
    done: boolean;
  }

  interface List1 {
    title: string;
    content: string;
  }

  var todo1: List1 = {
    id: 1,
    title: "할일1",
    content: "할일1",
    done: true,
  };

  console.log("todo1:", todo1);

  //!Error
  // 타입별칭은 재선언이 안된다.

  // type list2 = {
  //   id: number,
  //   done: boolean
  // }

  // type list2 = {
  //   title: string,
  //   content: string
  // }
})();
