var elem = null;

//elem이 falsy 값이면 elem이 평가되고, elem이 Truthy 값 이면 elem.value로 평가
var value = elem && elem.value;
console.log(value); //null
