{
  //변수 호이스팅이 발생하지 않는 것처럼 동작
  console.log(foo); //문법 에러 발생
  const foo = 1;
  console.log(foo); //1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); //문법 에러 발생
