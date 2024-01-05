//즉시 실행 함수도 일반함수처럼 값 반환
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

console.log(res); //15

//즉시 실행 함수에도 일반 함수처럼 인수 전달
res = (function (a, b) {
  return a * b;
})(3, 5);

console.log(res); //15
