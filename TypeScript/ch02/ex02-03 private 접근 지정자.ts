(() => {
  console.log("========== private 접근 지정자 ==========");

  interface Score {
    // kor: number;
    // eng: number;
    // sum(): number;
    avg(): number;
  }

  class HighSchool implements Score {
    //1. 맴버 변수 타입을 정의
    //2. 생성자 메서드의 매개변수와 리턴 타입을 정의
    private kor: number;
    private eng: number;

    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }

    private sum(): number {
      return this.kor + this.eng;
    }

    avg(): number {
      return Math.round(this.sum() / 2);
    }
  }
  var score1 = new HighSchool(100, 91);
  console.log("평균:", score1.avg());
  
  // 잘못된 사용
  // score1.eng = 99;
  // console.log("평균:", score1.avg());
})();
