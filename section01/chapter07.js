// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합(산술 + 대입) 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
++num8;
num8++; // num8 + 1

// 증감 연산자를 사용하면 그 라인이 후에 1이 추가
// console.log(++num8); // 전위 연산: 1이 즉시 추가 됨
// console.log(num8++); // 후위 연산: 1이 추가되지 않음

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자

// =을 두번만 쓰면 값 자체로만 비교 자료형은 비교하지 않음

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2; 