// var alert = '출입 금지!';
// console.log(alert);

alert('작업 완료.');

function fn1() {
  var alert = '출입 금지!';
  console.log(alert);
}
fn1();

(function () {
  var alert = '출입 금지!';
  console.log(alert);
})();

function fn2(alert) {
  console.log(alert);
}
fn2('출입 금지!!!');

alert('작업 완료.');