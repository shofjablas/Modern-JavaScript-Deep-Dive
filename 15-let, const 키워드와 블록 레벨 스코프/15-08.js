// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행
// 따라서 변수 선언문 이전에 변수 참조 가능
console.log(foo); // undefined

var foo;
console.log(foo); //undefined

foo = 1;
console.log(foo); //1
