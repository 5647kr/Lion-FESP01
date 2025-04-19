console.log("========== 바인딩4 ==========");
// ex02-15.js 복사
var count = 0;
var counter = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; // this = counter
    // 화살표 함수를 사용해 this 전달이 안된다. 그래서 그 위에 this를 가져다 쓴다.
    var visit2 = () => {
      this.count++; // this = counter
    }
    visit2();
	}
};

counter.visit();
counter.visit();
console.log('합계', counter.count);

