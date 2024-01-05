//n만큼 어떤 일을 반복
function repeat(n) {
  //i를 출력
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(i); // 0 1 2 3 4

// n만큼 어떤 일을 반복
function repeat2(n) {
  for (var i = 0; i < n; i++) {
    //i가 홀수일때만 출력
    if (i % 2) console.log(i);
  }
}

repeat(5); //1 3
