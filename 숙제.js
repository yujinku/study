// var , let , const 로 선언해보기 10/22 금요일
1. name 
let name = "yujin";
console.log (name);

2. age
const age = 27;
console.log (age);

3. hobby
var hobby = "watching movies";
console.log (hobby);


// 백틱 (``) 1 옆의 특수문자 10/23 토요일
백틱을 이용하여 문자열 안에 변수 담아보기

const name = "고양이"; 
const massage = `유진쿠는 ${name} 를 좋아합니다.` ;


//숫자 연산 해보기 10/24일 일요일

let name = "해서쿠";
let percent = 100;
const message = `해서쿠는 고양이를 ${percent+100} 만큼 좋아합니다.`;


//alert을 이용해 경고장 띄워보기 10/25일 월요일

alert ("내일 정말 출근을 안하시겠습니까?");
확인버튼 누를랭..


//prompt 이용해 사용자 정보 받아보기 10/26일 화요일

1. 성인입니까?
2. 당신이 좋아하는 캐릭터는?
3. 좋아하는 과일은 뭔가요?
4. 당신은 민트초코를 좋아합니까?
5. 집에 가고싶나요?

const isAdult = prompt("당신은 성인입니까?")
const favoriteCrt = prompt("당신이 좋아하는 캐릭터는?")
const favoriteFruit = prompt("당신이 좋아하는 과일은?")
const that = prompt("당신은 민트초코를 좋아합니까?")
const rest = prompt("당신은 지금 집에 가고 싶나요?")