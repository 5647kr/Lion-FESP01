console.log("========== 함수3 ==========");

// 함수의 결과 값으로 함수가 반환될 수 있다.
function fuc1(){
	console.log('foo 호출.');
  return function(){
    console.log('bar 호출.');
    return function(){
      console.log('baz 호출.');
      return fuc1;
    };
  };
};

fuc1()()()()()()()()()()()();

var fuc2 = fuc1();
var fuc3 = fuc2();
fuc3();