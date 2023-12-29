// x가 짝수이면 reuslt 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당
var x = 2;
var result;

if (x % 2) {
  // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변화됨
  result = "홀수";
} else {
  reuslt = "짝수";
}

console.log(result); //짝수
