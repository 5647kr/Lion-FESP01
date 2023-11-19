(()=>{
  console.log("==========자바스크립트 클래스 정의==========");

  class HighSchool {
    constructor (kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }
    
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return Math.round(this.sum() / 2);
    }
  }
  var score1 = new HighSchool(100, 91)
  console.log('평균', score1.avg());
})();