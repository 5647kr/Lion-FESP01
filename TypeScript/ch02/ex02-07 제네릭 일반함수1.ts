(() => {
  console.log("========== 제네릭 일반 함수 ==========");

  // 함수를 생성할 때 함수에서 사용할 매개변수, 리턴 타입을 정의하지 않고 호출하는 시점에 원하는 타입을 지정해서 사용한다.

  // 제네릭 사용 이전
  function fuc1(msg: string): string {
    return msg;
  }

  function fuc2(msg: number): number {
    return msg;
  }

  console.log(fuc1("hello"));
  console.log(fuc2(100));
})();
