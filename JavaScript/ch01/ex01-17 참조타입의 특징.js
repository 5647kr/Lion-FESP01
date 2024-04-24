function func(data1, data2){
  data1 += 10;
  data2[0] += 10;
  console.log(data1, data2[0]);
}

var num1 = 80;  // number
var arr1 = [80];  // array(object)

console.log('===== 함수 호출 이전 =====');
console.log(num1, arr1[0]);

console.log('===== 함수 호출 =====');
func(num1, arr1);

console.log('===== 함수 호출 이후 =====');
console.log(num1, arr1[0]);