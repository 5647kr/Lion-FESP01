// count 속성과 ride(), getCount() 메서드 작성
var Counter = function(){
  let count = 0;
  this.ride = function () {
    if(count < 40) {
      count++;
    }else {
      console.log('정원 초과!');
    }
  }
  this.getCount = function () {
    return count;
  }
};

var person = new Counter();
person.ride();
person.ride();

// for(var i = 0; i < 40; i++) {
//   c.ride();
// }
person.count += 40;

console.log('전체 탑승자', person.getCount());