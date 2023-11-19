"use strict";
(() => {
    console.log("==========타입스크립트의 클래스==========");
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
    console.log('평균', score1.avg());
})();
