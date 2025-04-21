// 국어, 영어 점수를 매개변수로 받는 생성자 함수
var Score = function(kor, eng){
  this.kor = kor;
  this.eng = eng;
  this.sum = function () {
    return this.kor + this.eng
  };


  // this.avg = function () {
  //   return this.sum() / 2
  // }
};

// 따로 분리해 두는게 좋다
// 인스턴스는 생성자 함수로 부터 생성되는 객체
// 그 인스턴스는 생성자 함수가 호출되는 기간동안에만 this
Score.prototype.avg = function () {
  return this.sum() / 2;
}

var score1 = new Score(100, 90);
var score2 = new Score(80, 70);

console.log("score1.sum():", score1.sum());
console.log("score1.avg():", score1.avg());
console.log("score2.sum():", score2.sum());
console.log("score1.sum === score2.sum:", score1.sum === score2.sum);
console.log("score1.avg === score2.avg:", score1.avg === score2.avg);
console.log("score1.constructor:", score1.constructor);
console.log("score2.constructor:", score2.constructor);
