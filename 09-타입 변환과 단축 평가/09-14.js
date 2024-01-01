//1. String 생성자 함수를 new 연산자 없이 호출
//숫자 -> 문자열 타입
String(1); //'1'
String(NaN); //"NaN"
String(Infinity); //"Infinity"
//불리언 타입 -> 문자열 타입
String(true); //"true"
String(false); //"False"

//2. Object.prototype.toString 메서드를 사용
//숫자 타입 -> 문자열 타입
(1).toString(); //"1"
NaN.toString(); //"NaN"
Infinity.toString; //"Infinity"
//불리언 타입 -> 문자열 타입
true.toString(); //"true"
false.toString(); //false

//3. 문자열 연결 연산자를 이용
1 + ""; //"1"
NaN + ""; //"NaN"
Infinity + ""; //"Infinity"
//불리언 타입 -> 문자열 타입
true + ""; //"true"
false + ""; //"false"
