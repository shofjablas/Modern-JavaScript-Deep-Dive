// 콜백 함수를 사용한 이벤트 처리
//myButton 버튼을 클릭하면 콜백 함수를 실행
document.getElementById("myButton").addEventListener("click", function () {
  console.log("button clicked!");
});

//콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지 출력
setTimeout(function () {
  console.log("1초 경과");
}, 1000);
