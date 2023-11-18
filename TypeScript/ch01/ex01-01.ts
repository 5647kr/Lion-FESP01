(() => {
  console.log("==========개발 환경 확인==========");
  function hello(name: string): string {
    // 매개변수 뒤에 :타입명     return 타입을 지정한다.
    return 'hello' + name;
  }
  console.log(hello('TypeScript!'))
})();