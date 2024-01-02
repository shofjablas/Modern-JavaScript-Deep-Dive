var person = {'last-name':'Lee',
1:10};

person.'last-name'; //SyntaxError:Unexpected string
person.last-name; //브라우저 환경: NaN
person[last-name]; //Reference Error
person['last-name']; //Lee

//프로퍼티 키가 숫자로이뤄진 문자열인 경우 따옴표 생략 가능
person.1; //SyntaxError: Unexpected number
person.'1'; //SyntaxError: Unexpected string
person[1]; //10: person[1] -> person['1']
person['1'] //10