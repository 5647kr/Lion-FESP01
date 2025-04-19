console.log("========== 유사 배열 객체1 ==========");

// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for(var i=0; i<arr.length; i++){
    console.log(`i: ${i} / arr[${i}]: ${arr[i]}`);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log("colorArr.shift():", colorArr.shift());
console.log("colorArr.pop():", colorArr.pop());
printArr(colorArr);

// TODO: prototype 단원. 배열의 모든 메소드는 Array.prototype 속성에 정의되어 있음

console.log("========== 유사 배열 객체2 ==========");

//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가

// error
// for(let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i])
// }

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


    // return Array.prototype.push.call(this)
  },

  unshift: function(elem) {
    // unshift: 배열의 처음에 새로운 요소 추가.
    // length 1추가되어야 한다.
    arr2.length++
    for(var i = 0; i < arr2.length; i++) {
      arr2[arr2.length - i] = arr2[arr2.length - 1 - i]
    }
    arr2[0] = elem;


    // this
    // for(var i  = 0; i < this.length - 1; i++) {
    //   this[this.length - i] = this[this.length - i - 1]
    // }
    // this.length++;
    // this[0] = elem


    // return Array.prototype.unshift.call(this)
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

    // return Array.prototype.shift.call(this)
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

    // return Array.prototype.pop.call(this)
  }
};

console.log("----- push fuc1 -----");
arr2.push('black');
printArr(arr2);

console.log("----- push fuc2 -----");
arr2.push('white');
printArr(arr2);

console.log("----- unshift fuc1 -----");
arr2.unshift('red');
printArr(arr2);

console.log("----- unshift fuc2 -----");
arr2.unshift('white');
printArr(arr2);

console.log("----- shift fuc -----");
console.log(arr2.shift());
printArr(arr2);

console.log("----- pop fuc -----");
console.log(arr2.pop());
printArr(arr2);