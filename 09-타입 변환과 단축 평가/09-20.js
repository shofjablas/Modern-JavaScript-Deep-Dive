var done = true;
var message = "";

//주어진 조건이 true일때
if (done) message = "완료";

//if문은 단축 평가로 대체 가능하다.
//done이 true라면 message에 '완료'를 할당
message = done && "완료";
console.log(message); //완료
