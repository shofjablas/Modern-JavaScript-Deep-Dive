function multiply(x, y) {
  return x * y; //반환문
  //반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시
  console.log("실행되지 x");
}

console.log(multiply(3, 5)); //15
