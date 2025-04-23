// var alert = '출입 금지!';
// console.log(alert);

alert('전역1: 작업 완료.');

function fuc1() {
  var alert = 'fuc1: 출입 금지!';
  console.log(alert);
}
fuc1();


(function () {
  var alert = '즉시실행함수: 출입 금지!';
  console.log(alert);
})();

function fuc2(alert) {
  console.log(alert);
}
fuc2('fuc2: 출입 금지!!!');

alert('전역2: 작업 완료.');