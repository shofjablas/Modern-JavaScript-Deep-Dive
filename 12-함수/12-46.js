//팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱
//n! = 1*2*...*(n-1)*n
function factorial(n) {
  //탈출 조건: n이 1이하일 때 재귀 호출 멈춤
  if (n <= 1) return 1;
  //재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
