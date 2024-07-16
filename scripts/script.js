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

// 상수를 선언할때에는 "const" 이라는 키워드를 사용한다. (선언하면 값을 바꿀수 없다.)
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
// 양쪽의 값이 둘 다 true 일때만 결과물이 true 입니다.

const i = true && true
console.log(i)
const j = true && false //반대로해도 결과값은 똑같이 나옴 false
console.log(j)

/* OR */
// 양쪽의 값 중 하나라도 true 라면 결과물이 true 입니다. 그리고, 두 값이 둘 다 false 일 때에만 false입니다.


let k = true || false;
k = false || true;
k = true || true;
// true

let l = false || false; //false

/* 연산 순서 */
//사칙 연산을 할 때 곱셉 나눗셈이 먼저고 그 다음이 덧셈 뺄셈인 것 처럼, 논리 연산자도 순서가 있습니다.
//순서는 NOT! -> AND&& -> OR|| 입니다.

// const value = !((true && false) || (true && false) || !false);
// 괄호로 감싸져있을 때에는 가장 마지막에 처리를 하니까 맨 앞 NOT 은 나중에 처리하겠습니다.

// 우선 NOT 을 처리합니다.

// !((true && false) || (true && false) || true);
// 그 다음엔 AND 를 처리합니다.

// !(false || false || true);
// OR 연산자를 좌측에서 우측 방향으로 처리를 하게 되면서 다음과 같이 처리됩니다.

// !true;
// 결국 결과값은 false 가 됩니다.

/* 비교 연산자 */
const A = 1;
const B = 1;
const equals = a === b;
console.log(A, B, equals);

// === 는 두 값이 일치하는 확인, 일치시 true 일치하지 않을시 false 가 나타난다.

// 두 값이 일치 하는지 확인 할 때 = 문자를 3번 사용하는데요, 2개로도 비교를 할 수는 있습니다.

const C = 1;
const D = 1;
const equal = a == b;
console.log(equal);
// 위 코드는 똑같은 결과 true 를 반환하긴 하는데요, = 문자가 3개 있을 때와 2개 있을 떄의 차이점은 2개 있을때에는 타입 검사까지는 하지 않는다는 것입니다.

// 예를 들어서 == 를 사용하면 숫자 1과 문자 '1' 이 동일한 값으로 간주됩니다.

const E = 1;
const F = '1';
const equa = a == b;
console.log(equa);
// 결과: true

// 그리고, 0 과 false 도 같은 값으로 간주되지요.

const G = 0;
const H = false;
const equ = a == b;
console.log(equals);
// 결과: true

// 그리고 undefined 와 null 도 같은 값으로 간주됩니다.

const I = null;
const J = undefined;
const eq = a == b;
console.log(eq);
// 결과: true

// 두 값이 일치하는지 비교 할 때에는 == 대신 === 를 사용 할 것을 권장 드립니다. == 를 사용하다보면 실수를 할 확률이 높아집니다.

/* 두 값이 일치하지 않는지 확인 */
https://marsbranding.com/
