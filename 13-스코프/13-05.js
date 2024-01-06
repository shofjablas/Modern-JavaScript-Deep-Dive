function bar() {
  let x = 1;
  // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언 허용 x
  let x = 2;
}

bar();
