const perosn = {
  name: "Lee",
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: "Lee", writeable:true, enurmerable: true, configurable: true}
