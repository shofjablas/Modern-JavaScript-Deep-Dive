function outer() {
  var x = 1;

  //중첩 함수
  function inner() {
    var y = 2;
    //외부 함수의 변수를 참조
    console.log(x + y); //3
  }
  inner();
}

outer();
