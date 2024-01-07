const person = {
  name: "Lee",
  isMale: true,
  address: {
    city: "Seoul",
  },
};

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결
const isFrozenPerson = Object.isFrozen(person); // true
// 중첩 객체까지 동결 못함
const isFrozenAddress = Object.isFrozen(person.address); // false

person.address.city = "Busan";
console.log(person); // { name: "Lee", isMale: true, address: { city: "Busan" }}
