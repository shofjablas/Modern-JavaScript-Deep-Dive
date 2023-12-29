var string = "Hello World";
var search = "l";
var count = 0;

//문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  //'l'ㅇ아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동
  if (string[i] !== search) continue;
  count++; //continue 문이 실행되면 이 문은 실행 x
}

console.log(count); // 2

//참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
const regexp = new Regexp(search, "g");
console.log(string.match(regexp).length); //3
