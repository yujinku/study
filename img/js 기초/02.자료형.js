// 문자형 (string)

const name = "yujin"; // string

javaScript에서는 
문자를 '', "" 로 감싸준다.
--> '', "" 이 둘은 별 차이 없음

const massage = 'I/'m a girl';

// ----------------- `` (백틱) -----------------

// 백틱 (``) 문자열 내부에 변수를 표현해줄때 사용
// ex
const name = "yujin"; 
const massage = `im a ${name}` ;

// 내부에 표현식을 넣을 수 있다.

let age = 30;
const massage2 = `저는 ${age-2}살 입니다` ;

+ - * 등 사칙연산 가능



// 숫자형 (Number)

const age = 27; // Number

숫자형은 사칙연산이 가능하다.javaScript에서는

//ex

console.log(1 + 3); //더하기
console.log(10 - 3); //빼기
console.log(3 * 2);  //곱하기
console.log(6 / 3);  // 나누기

// 숫자 1을 0으로 나누면 무한대의 결과가 나온다.

const x = 1/0; // 
console.log(x) // Infinity

// 문자를 숫자로 나누면 숫자가 아니라고 나온다.

const name = "yujin";

const y = name/2;

console.log(y) --> NaN // NaN = Not a Number

//Boolean 

Boolean 은 물리적인 요소를 나타낸다.
  --> 현상에 있어서 진실인지 거짓인지 판명해주는 것
      true, false

  //ex
  const name ="yujin";

  const age = 27;

  console.log(name == "yujin"); --> true
  console.log(age > 30); --> false

  //null 과 undifined

  null 은 존재하지 않은 값을 의미한다.


  undefined 는 값이 할당되지 않았다는 걸 의미한다.

  //ex

  let user = null; --> 유저는 존재하지 않는다는 의미한다
  
  let age;
  console.log(age) --> undefined 출력값이 할당되지 않은걸 의미한다

  null 정보가 존재하지 않다는걸 명시해줌
  undefined 아직 정보가 입력되지 않았다고 알려주는 것

  // typeof 연산자 -----------------
  console.log(typeof 3);  —> number
  console.log(typeof name);  —> string
  console.log(typeof true);  —> Boolean
  console.log(typeof "xxx");   —> string
  console.log(typeof null);     —> Object // null 은 object가 아니다 --> 10일만에 만들어서 허술함
  console.log(typeof undefined);  —> undefined

  typeof 를 사용하는 이유?
  1. 다른 개발자가 작성한 변수의 타입을 알아야 할때
  2. api 통신 등을 통해 받아온 변수들을 타입에 따라 다른 방식으로 처리해야 할때 사용된다