//continue문을 사용하지 않으면 if문 내에서 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  //'l'이면 카운트를 증가시킨다.
  if (string[i] === search) {
    count++;
    //code
    //code
    //code
  }
}

//coninnue문을 사용하면 if문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  //'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== search) continue;

  count++;
  //code
  //code
  //code
}
