var person = {
  name: "Lee",
};

//프로퍼티 동적 생성
person.age = 20;

//person 객체에 age 프로퍼티가 존재
//따라서 delete 연산자로 age 프로퍼티를 삭제
delete person.age;

//person 객체에 address 프로퍼티가 존재하지 않는다.
//따라서 delete 연산자로 address 프로퍼티를 삭제 x 이때 에러 발생 x
delete person.address;

console.log(person); //{name:"Lee"}
