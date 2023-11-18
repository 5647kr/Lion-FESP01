(()=>{
  console.log("==========인터페이스 사용==========");

  // 클래스의 타입 지정
  // 클래스명 뒤에 implements 키워드를 추가한다.

  interface Score {
    kor: number,
    eng: number,
    sum(): number,
    avg(): number
  }

  class HighSchool implements Score {
    kor: number;
    eng: number;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }

    avg() {
      return this.sum() / 2;
    }
  }

  const user = new HighSchool(100, 90)
  console.log(user.sum(), user.avg());
})();

