var x = 5,
  result;

// 선할당 후증가
result = x++;
console.log(result, x); //5 6

//선증가 후 대입
reuslt = ++x;
console.log(result, x); //7 7

// 선대입 후감소
reuslt = x--;
console.log(result, x); //7 6

// 선감소 후대입
result = --x;
console.log(result, x); //5 5
