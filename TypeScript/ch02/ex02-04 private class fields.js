(() => {
  console.log("========== Private class fields ==========");

  // 외부에서 접근 하지 못하게 막는다.
  // 클래스의 속성명, 메서드명 앞에 #을 붙인다.

  class HighSchool {
    #kor = 0;
    #eng = 0;
    constructor(kor, eng) {
      this.#kor = kor;
      this.#eng = eng;
    }

    sum() {
      return this.#kor + this.#eng;
    }
    avg() {
      return Math.round(this.sum() / 2);
    }
  }

  
  var score1 = new HighSchool(100, 91);
  console.log("평균:", score1.avg());
})();
