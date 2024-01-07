// 브라우저 환경에서 실행해야한다.

// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다
console.log(window.x); //1
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용
console.log(x); //1

//암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y); //2
console.log(y); //2

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window); //2
console.log(y); //2

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티
console.log(window.foo);
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용 가능
console.log(foo); //f foo() {}
