// 런타임 이전에 선언 단계가 실행. 아직 변수가 초기화 되지 x
// 초기화 이전의 일시적 사각지대에서는 변수를 참조 x
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계 실행
console.log(foo); // undefiend

foo = 1;
console.log(foo); //1
