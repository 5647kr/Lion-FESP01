(() => {
  console.log("========== TS 클래스 정의 ==========");

  interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  class HighSchool implements Score{
    // 1. 맴버 변수 타입을 정의
    kor: number;
    eng: number;

    // 2. 생성자 메서드의 매개변수와 리텁 타입을 정의
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }

    // 3. 타입추론에 의해 타입을 지정하지 않아도 된다.
    sum(): number {
      return this.kor + this.eng;
    }
    avg(): number {
      // 평균은 소수 첫째 자리에서 반올림
      return Math.round(this.sum() / 2);
    }
  }
  var score1 = new HighSchool(100, 91);
  console.log("평균:", score1.avg());
})();
