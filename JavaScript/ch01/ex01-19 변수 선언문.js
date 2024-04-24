console.log("----------변수 선언문----------");

// TODO: hoisting 단원. var로 선언한 변수가 함수단위의 접근이 가능한 이유
/**
 * 전역변수
 *  함수 외부에 선언한 변수
 *  어디에서나 접근 가능
 * 
 * 지역변수
 *  함수 내부에 선언한 변수
 *  함수 안에서만 접근 가능
 *  함수가 끝나면 끝나는 변수
 * 
 * 변수 우선 순위
 *  가까운 곳부터 찾는다
 */ 
/**
 * var 선언문
    함수 단위의 유효범위를 갖는 변수 선언문

  let 선언문
    블록 단위의 유효범위를 갖는 변수 선언문
    
    const 선언문
    블록 단위의 유효범위를 갖는 상수 선언문
 */
// 지정한 두 값의 최대값을 반환한다.

function max(n1, n2){
  // var maxNum;
  // let maxNum;
  // const maxNum = 10;

  if(n1 > n2){
    var maxNum = n1;
  }else{
    var maxNum = n2;
  }

  return maxNum;
}

console.log(max(10, 20));   // 20
console.log(max(200, 30));  // 200