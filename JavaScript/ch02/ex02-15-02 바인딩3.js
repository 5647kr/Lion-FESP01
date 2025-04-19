console.log("========== 바인딩3 ==========");
// ex02-15.js 복사
var count = 0;
var counter = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; // this = counter
    var visit2 = function(){
      this.count++; // this = counter
    }
    // 명시적으로 visit2안에 this를 couter로 명한다.
    visit2.call(this);
	}
};

counter.visit();
counter.visit();
console.log('합계', counter.count);