// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; 
// 숫자를 문자열로 묵시적으로 형 변환
// 불가능한 연산 -> 오류 발생시키지 않기 위해 암묵적으로 변환
// 특정 하나의 변수 값을 형 변환 했을때 오류 발생이 없을시 형 변환

//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개"
let strToNum2 = parseInt(str2); // 숫자만 포함되지 않은 문자열을 변환할 때 사용

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

