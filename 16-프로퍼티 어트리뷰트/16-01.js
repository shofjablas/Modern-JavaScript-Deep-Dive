const o = {};

//내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근 x
o.[[Prototype]] // -> Uncaught SyntaxError:unexpected token '['
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단 제공
o.__proto__ //-> object.prototype