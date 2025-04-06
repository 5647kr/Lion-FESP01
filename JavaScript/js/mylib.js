// 배열에 min() 추가
Array.prototype.min = function() {
  return Math.min(...this)
}

// 모든 함수에 memoization 기능 추가
// isPrime(3) -> 캐시X
// isPrime.memo(1000000007) -> 캐시O

Function.prototype.memo = function(key) {
  this._cache = this._cache || {};
  if(this._cache[key] !== undefined) {
    return this._cache[key]
  }else {
    // 캐시를 위한 코드
    return this._cache[key] = this(key);
  }
}


// 모든 함수에 memoization 기능 추가
// isPrime(3) -> 캐시X

// isPrime = isPrime.memoize();
// isPrime(1000000007) -> 캐시O 

Function.prototype.memoize = function() {
  var fn = this; //isPrime
  return function() {
    return fn.memo.apply(fn, arguments)
  };
};