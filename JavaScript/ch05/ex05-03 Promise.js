// 동기 방식
// 작업이 오래걸려도 순차적으로 기다리면서 작업을 수행하는 방식

function synFn1() {
  console.log('syncFn1 작업 시작');
  // 작업이 오래걸리는 코드
  console.log('syncFn1 작업 종료');

  return 'syncFn1 결과물'
}

function synFn2(Fn1result) {
  console.log('syncFn2 작업 시작', Fn1result);
  // 작업이 오래걸리는 코드
  console.log('syncFn2 작업 종료');

  return 'syncFn2 결과물'
}

// (function () {
//   const result = synFn1();
//   synFn2(result);
//   console.log('테스트 종료');
// })();

// 비동기 방식

// function asynFn1(resolve) {
//   console.log('asyncFn1 작업 시작');
//   setTimeout(function () {
//     // 시간이 걸리는 작업
//     console.log('asyncFn1 작업 종료');

//     // return 'asyncFn1의 결과물'
//     resolve('asyncFn1 결과물');
//   }, 8000)
// }

// function asynFn2(Fn1result, resolve) {
//   console.log('asyncFn2 작업 시작', Fn1result);
//   setTimeout(function () {
//     // ...
//     console.log('asyncFn2 작업 종료');
//     resolve('asyncFn2 결과물')
//   }, 7000)
// }

// (function () {
//   asynFn1(function (result) {
//     asynFn2(result, function (Fn2result) {
//       console.log(Fn2result);
//     });
//   });
//   console.log('테스트 종료');
// })();

// promise

function promiseFn1() {
  return new Promise(function (resolve, reject) {
    console.log('promiseFn1 작업 시작');
    setTimeout(function () {
      // ...
      console.log('promiseFn1 작업 종료');
      resolve('promiseFn1 결과물');
    }, 8000)
  })
}

function promiseFn2(Fn1result) {
  return new Promise(function (resolve, reject) {
    console.log('promiseFn2 작업 시작', Fn1result);
    setTimeout(function () {
      // ...
      console.log('promiseFn2 작업 종료');
      resolve('promiseFn2 결과물')
    }, 7000)
  });
}

(function () {
  promiseFn1()
  .then(promiseFn2)
  .then(() => console.log('작업 종료'))
  .catch(() => console.error(err));
})();


// async...await

async function working() {
  var f1Result = await promiseFn1();
  var f2Result = await promiseFn2(f1Result);
  console.log('작업 처리 완료', f2Result);
}

(function () {
  working();
  console.log('이벤트 처리 완료');
})();