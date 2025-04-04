console.log("----------기명 함수2----------");

// 표현식 방식의 함수 생성(기명함수 사용예)
var f = function factorial(n){
	if(n == 1) return 1;
  return n * factorial(n - 1);
};

console.log(f(5));
// console.log(factorial(5)); //! Error

// 5! -> 5 * 4 * 3 * 2 * 1
// 5 * 4!
// 5 * 4 * 3!
// 5 * 4 * 3 * 2!
// 5 * 4 * 3 * 2 * 1!
// 5 * 4 * 3 * 2 * 1

console.log('로또 1등 당첨 확률은 1/' + Math.round(f(45)/(f(6)*f(39))));

// 함수안에서 자기 자신을 부르는 함수를 재귀함수라 한다.


