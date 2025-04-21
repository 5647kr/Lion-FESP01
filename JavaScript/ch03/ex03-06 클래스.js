// 고등학교 성적관리 생성자 함수(총점과 평균 계산)

class HighSchool3 {
  constructor(kor, eng){
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

var score1 = new HighSchool3(100, 91);
console.log("score1.sum():", score1.sum());
console.log("score1.avg():", score1.avg());

// 대학교 성적관리 생성자 함수(총점, 평균, 학점 계산)

class College3 extends HighSchool3{
  constructor(kor, eng) {
    super(kor, eng); // 부모 호출 키워드: super
  }

  grade() {
    var grade = 'F';
    var avg = this.avg();
    if(avg >= 90){
      grade = 'A';
    }else if(avg >= 80){
      grade = 'B';
    }else if(avg >= 70){
      grade = 'C';
    }else if(avg >= 60){
      grade = 'D';
    }
    return grade;
  };
}

var score2 = new College3(80, 71);
console.log("score2.sum():", score2.sum());
console.log("score2.avg():", score2.avg());
console.log("score2.grade():", score2.grade());