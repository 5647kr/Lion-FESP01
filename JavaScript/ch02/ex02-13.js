console.log("---------- 매개변수와 인자의 수----------");

function fn1(n1, n2){
  console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  }

fn1();
fn1(10);
fn1(10, 20);
fn1(10, 20, 30);
fn1(10, 20, 30, 40);
fn1(10, 20, 30, 40, 50);


console.log("----------암묵적 매개변수----------");

console.log("----------Arguments----------");

function fn2(n1, n2){
  // console.log(n1, n2);

  // 모든 인자값의 합을 출력
  var sum1 = 0;

  for(var i = 0; i < arguments.length; i++) {
    sum1 += arguments[i]
  };
  console.log('합계', sum1);
}

fn2();
fn2(10);
fn2(10, 20);
fn2(10, 20, 30);
fn2(10, 20, 30, 40);
fn2(10, 20, 30, 40, 50);

("----------This----------");

// 함수를 호출한 객체에 대한 참조
//! 함수 내부의 this는 window 객체이다.

var foo = function () {
  console.log(this);
  return 'i am foo';
};
