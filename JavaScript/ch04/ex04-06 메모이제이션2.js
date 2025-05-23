// ex02-21.js 복사


// 지정한 수가 소수인지 여부를 반환
var isPrime = function(num){  
  var prime = true;

  for(var i = 2; i < num/2; i++) {
    if(num % i === 0) {
      prime = false;
      break;
    }
  }
  // 캐시를 위한 코드
  return prime;
};

isPrime = isPrime.memoize();



console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.timeEnd('소요시간');
