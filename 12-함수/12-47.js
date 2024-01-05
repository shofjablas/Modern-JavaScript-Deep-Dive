//함수 표현식
var factorial = function foo(n) {
  //탈출 조건: ndl 1이하일대 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  //함수를 가리키는 식별자로 자기 자신을 재귀호출
  return n * factorial(n - 1);

  //함수 이름으로 자기 자신을 재귀 호출 가능
  //console.log(factorial === foo); //true
  //return n * foo(n-1);
};

console.log(factorial(5)); //120
