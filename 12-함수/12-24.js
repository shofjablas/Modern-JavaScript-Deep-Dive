function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    //매개변수를 통해 전달된 인수의 타입이 부적잘한 경우 에러를 발생
    throw new TypeError("인수는 모두 숫자 값이어야 함");
  }
  return x + y;
}

console.log(add(2)); //TypeError: 인수는 모두 숫자 값이어야 함
console.log(add("a", "b")); //TypeError: 인수는 모두 숫자 값이어야 함
