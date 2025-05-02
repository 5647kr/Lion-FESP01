"use strict";
(() => {
    console.log("========== 인터페이스 사용 ==========");
    class HighSchool {
        constructor(kor, eng) {
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
    const user = new HighSchool(100, 90);
    console.log("user.sum():", user.sum());
    console.log("user.avg():", user.avg());
})();
