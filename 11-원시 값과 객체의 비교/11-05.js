var str = "string";
//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근 가능
//하지만 문자열은 원시 값이므로 변경 불가. 이때 에러 발생 x
str[0] = "S";

console.log(str); //string
