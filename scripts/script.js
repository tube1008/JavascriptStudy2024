/* 변수와 상수 */
// - 변수와 상수는 특정 이름에 특정 값을 담을 때 사용합니다.

// let value = 1;
// value라는 이름에 1 값을 넣고 console로 확인하면 1이 나온다.
// console.log(value);
// 특정 이름에 값을 설정하는것을 "선언" 이라고 말한다.

/* 변수 */
// 변수는 바뀔수 있는 값을 말한다. (한번 값을 선언하면 다시 바꿀 수 있음)
// 변수를 선언할때는 "let" 이라는 키워드를 사용한다. (한번 선언하면 똑같은 이름으로 선언하지 못한다.)
// 단!!!!, 다른 블록 범위에서는 똑같은 이름으로 사용이 가능하긴 하다.
let value = 1; //변수 선언
console.log(value) 
value = 2; // 대입 연산자
console.log(value) 

/* 상수 */
// 상수는 한번 선언하고 값이 바뀌지 않는 값을 의미합니다. (값이 고정적)

// 상수를 선언할때에는 "const" 이라는 키워드를 사용한다. (산안하면 값을 바꿀수 없다.)
const a = 1;
// a = 2;
// 콘솔창에 에러가 뜨는데 이는 한번 상수값을 선언했으면 다른값으로 선언할 수 없기 때문임. (마찬가지로 선언한 이름을 똑같이 쓸 수 없다.)

// "var" 더이상 사용하지 않는다. "let"과 다른 주요 차이점으로는 똑같은 이름으로 여러번 선언할수도 있습니다.

/* 데이터 타입 */
/* 숫자(number) - 숫자는 바로 값을 대입하면 된다. */
// ex)) let value = 1;

/* 문자열(string) */
// 텍스트 형태의 값은 작은 따옴표'', 혹은 큰따옴표를 사용한다"" / 주로 작은 따옴표를 사용.

/* 참/거짓 (boolean) */
let good = true;
let loading = false;
console.log(good, loading);

/* null 과 undefined */
// null 은 주로 "이 값이 없다!" 라고 선언할때 사용.
// undefined 는 "아직 값이 설정되지 않았다" 는 것을 의미.

let criminal;
console.log(criminal); //undifined

/* 연산자 */
// = <-연산자

/* 산술 연산자 */
// 사칙연산과 같은 작업을 하는 연산자를 의미 (+,-,*,/)
let b = 1 + 2;
console.log(b);

let c = 1 + 2 - (3 * 4) / 4;
console.log(c);

let d = 1;
console.log(d); 
d++; // 1을 더하기 직전값을 보여줌
console.log(d++); 
++d; // 1을 더한 다음의 값을 보여줌
console.log(++d); 

let e = 1;
e--;
console.log(e--);
--e;
console.log(--e);

/* 대입 연산자 */
// 특정값에 연산을 한 값을 바로 설정 할 때 사용 할 수 있는 연산자 입니다. 
let f = 1;
f = f + 3;
console.log(f);
f += 3;
console.log(f);

/* 논리 연산자 */
// 논리 연산자는, 불리언 타입 (true or false)를 위한 연산자 입니다. (if문에 유용)

/* 
    ! = NOT
    && = AND
    || = OR
*/

/* NOT */
//  true는 false로,  false는 true로 바꿔 줍니다.

const g = !true;
console.log(g);

const h = !false;
console.log(h);

/* AND */