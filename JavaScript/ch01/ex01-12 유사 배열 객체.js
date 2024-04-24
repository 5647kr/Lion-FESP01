console.log("----------유사 배열 객체1----------");

// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

// TODO: protoeype 단원. 배열의 모든 메소드는 Array.prototype 속성에 정의되어 있음

console.log("----------유사 배열 객체2----------");

//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가

var arr2 = {
  0: 'orange',
  1: 'yellow', 
  2: 'green',
  length: 3,
  
  push: function(elem) {
    // 맨 뒤에 지정에 elem를 추가한다.
    // length를 1 증가시킨다.

    arr2[arr2.length] = elem;
    arr2.length++

    // this
    // this[this.length] = elem;
    // this.length++
  },
  
  shift: function() {
    // 첫번째 요소를 삭제하고 반환한다.
    // length를 1 감소한다.

    var first = arr2[0];
    for(var i  = 0; i < arr2.length - 1; i++) {
      arr2[i] = arr2[i + 1]
    }
    arr2.length--;
    delete arr2[arr2.length];
    return first;

    // this
    // var first = this[0];
    // for(var i  = 0; i < this.length - 1; i++) {
    //   this[i] = this[i + 1]
    // }
    // this.length--;
    // delete this[this.length];
    // return first;
  },
  
  pop: function() {
    // 마지막 요소 삭제하고 반환한다.
    // length를 1 감소한다.

    var last = arr2[arr2.length - 1];
    arr2.length--;
    delete arr2[arr2.length];
    return last;

    // this
    // var last = this[this.length - 1];
    // this.length--;
    // delete this[this.length];
    // return last;
  }
};

console.log("----------puch fuc1----------");
arr2.push('black');
printArr(arr2);

console.log("----------puch fuc2----------");
arr2.push('white');
printArr(arr2);

console.log("----------shift fuc----------");
console.log(arr2.shift());
printArr(arr2);

console.log("----------pop fuc----------");
console.log(arr2.pop());
printArr(arr2);