//foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 찰출한다.
  console.log(2);
}

console.log("Done!");
