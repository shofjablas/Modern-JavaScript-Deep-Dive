var obj = {};
var key = "Hello";

//ES5: 프로퍼티 키 동적 생성
obj[key] = "world";
//ES6:계산된 프로퍼티 이름
//var obj = {[key]:'world'};

console.log(obj); //{hello:"world"}
