const person = {
  name: "Lee",
};

// person 객체는 확장이 금지된 객체x
console.log(Object.isExtensible(person)); //true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지
Object.preventExtensions(person);

// person 객체는 확장 금지된 객체
console.log(Object.isExtensible(person)); //false

// 프로퍼티 추가 금지
person.age = 20; // 무시. strict model에서 에러
console.log(person);

// 프로퍼티 추가는 금지도지만 삭제 가능
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가 금지
Object.defineProperty(perosn, "age", { value: 20 });
// TypeError
