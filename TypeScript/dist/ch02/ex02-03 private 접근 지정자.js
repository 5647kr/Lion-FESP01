"use strict";
(() => {
    console.log("========== private 접근 지정자 ==========");
    class HighSchool {
        constructor(kor, eng) {
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
    var score1 = new HighSchool(100, 91);
    console.log("평균:", score1.avg());
    // 잘못된 사용
    // score1.eng = 99;
    // console.log("평균:", score1.avg());
})();
