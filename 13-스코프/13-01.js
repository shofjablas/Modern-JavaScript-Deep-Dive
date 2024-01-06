function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조 가능
  // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부

  console.log(x, y); //2 5
  return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조
console.log(x, y); // ReferenceError: x is not defiend
