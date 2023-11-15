var binary = 0b01000001; // 2진수
var octal = 0o101;
var hax = 0x41;

//표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); //65
console.log(octal); //65
console.log(hex); //65
console.log(binary === octal); //true
console.log(octal === hex); //true
