console.log("========== delete 연산자 ==========");
// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for(var i=0; i<arr.length; i++){
    console.log(`i: ${i} / arr[${i}]: ${arr[i]}`);
  }
}

var arr = ['zero', 'one', 'two', 'three'];

// delete로 배열요소 삭제
delete arr[1];

printArr(arr);

// 중간에 undefined로 출력되고 있다.