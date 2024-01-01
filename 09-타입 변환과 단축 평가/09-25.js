//단축 평가를 사용한 매개 변수의 기본 값 설정
function getStringLength(str) {
  str = str || "";
  return str.length;
}

getStringLength(); //0
getStringLength("h1"); //2

//ES6의 매개변수의 기본 값 설정
function getStringLength(str = "") {
  return str.length;
}

getStringLength(); //0
getStringLength("hi"); //2
