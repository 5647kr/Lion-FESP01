
// 고등학교 성적관리 생성자 함수(총점과 평균 계산)
function HighSchool1(kor, eng){
  this.kor = kor;
  this.eng = eng;
}

HighSchool1.prototype.sum = function () {
  return this.kor + this.eng;
}

HighSchool1.prototype.avg = function () {
  return this.sum() / 2;
}

var score1 = new HighSchool1(100, 91);
console.log("score1.sum():", score1.sum());
console.log("score1.avg():", score1.avg());


// 대학교 성적관리 생성자 함수(총점, 평균, 학점 계산)

function College1(kor, eng) {
  // this.kor = kor;
  // this.eng = eng;

  HighSchool1.call(this, kor, eng);
}

// College1가 HighSchool1을 상속받는다
College1.prototype = new HighSchool1();
College1.prototype.constructor = College1;

College1.prototype.grade = function(){
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

var score2 = new College1(80, 71);
console.log("score2.sum():", score2.sum());
console.log("score2.avg():", score2.avg());
console.log("score2.grade():", score2.grade());