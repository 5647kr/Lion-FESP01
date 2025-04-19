console.log("========== 함수2 ==========");

// 함수의 인자로 전달될 수 있다.
function fuc1(fn){
	console.log('foo 호출.');
  fn();
};

function fuc2(){
	console.log('bar 호출.');
};

fuc1(fuc2);
