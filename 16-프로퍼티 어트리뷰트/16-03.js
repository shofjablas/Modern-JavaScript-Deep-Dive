const perosn = {
  name: "Lee",
};

//프로퍼티 동적 생성
person.age = age;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환
console.log(Object.getOwnPropertyDescriptors(person));
