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
// let value = 1; //변수 선언
// console.log(value)
// value = 2; // 대입 연산자
// console.log(value)

/* 상수 */
// 상수는 한번 선언하고 값이 바뀌지 않는 값을 의미합니다. (값이 고정적)

// 상수를 선언할때에는 "const" 이라는 키워드를 사용한다. (선언하면 값을 바꿀수 없다.)
// const a = 1;
// a = 2;
// 콘솔창에 에러가 뜨는데 이는 한번 상수값을 선언했으면 다른값으로 선언할 수 없기 때문임. (마찬가지로 선언한 이름을 똑같이 쓸 수 없다.)

// "var" 더이상 사용하지 않는다. "let"과 다른 주요 차이점으로는 똑같은 이름으로 여러번 선언할수도 있습니다.

/* 데이터 타입 */
/* 숫자(number) - 숫자는 바로 값을 대입하면 된다. */
// ex)) let value = 1;

/* 문자열(string) */
// 텍스트 형태의 값은 작은 따옴표'', 혹은 큰따옴표를 사용한다"" / 주로 작은 따옴표를 사용.

/* 참/거짓 (boolean) */
// let good = true;
// let loading = false;
// console.log(good, loading);

/* null 과 undefined */
// null 은 주로 "이 값이 없다!" 라고 선언할때 사용.
// undefined 는 "아직 값이 설정되지 않았다" 는 것을 의미.

// let criminal;
// console.log(criminal); //undifined

/* 연산자 */
// = <-연산자

/* 산술 연산자 */
// 사칙연산과 같은 작업을 하는 연산자를 의미 (+,-,*,/)
// let b = 1 + 2;
// console.log(b);

// let c = 1 + 2 - (3 * 4) / 4;
// console.log(c);

// let d = 1;
// console.log(d);
// d++; // 1을 더하기 직전값을 보여줌
// console.log(d++);
// ++d; // 1을 더한 다음의 값을 보여줌
// console.log(++d);

// let e = 1;
// e--;
// console.log(e--);
// --e;
// console.log(--e);

/* 대입 연산자 */
// 특정값에 연산을 한 값을 바로 설정 할 때 사용 할 수 있는 연산자 입니다.
// let f = 1;
// f = f + 3;
// console.log(f);
// f += 3;
// console.log(f);

/* 논리 연산자 */
// 논리 연산자는, 불리언 타입 (true or false)를 위한 연산자 입니다. (if문에 유용)

/* 
    ! = NOT
    && = AND
    || = OR
*/

/* NOT */
//  true는 false로,  false는 true로 바꿔 줍니다.

// const g = !true;
// console.log(g);

// const h = !false;
// console.log(h);

// /* AND */
// // 양쪽의 값이 둘 다 true 일때만 결과물이 true 입니다.

// const i = true && true
// console.log(i)
// const j = true && false //반대로해도 결과값은 똑같이 나옴 false
// console.log(j)

// /* OR */
// // 양쪽의 값 중 하나라도 true 라면 결과물이 true 입니다. 그리고, 두 값이 둘 다 false 일 때에만 false입니다.


// let k = true || false;
// k = false || true;
// k = true || true;
// // true

// let l = false || false; //false

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
// const A = 1;
// const B = 1;
// const equals = a === b;
// console.log(A, B, equals);

// === 는 두 값이 일치하는 확인, 일치시 true 일치하지 않을시 false 가 나타난다.

// 두 값이 일치 하는지 확인 할 때 = 문자를 3번 사용하는데요, 2개로도 비교를 할 수는 있습니다.

// const C = 1;
// const D = 1;
// const equal = a == b;
// console.log(equal);
// 위 코드는 똑같은 결과 true 를 반환하긴 하는데요, = 문자가 3개 있을 때와 2개 있을 떄의 차이점은 2개 있을때에는 타입 검사까지는 하지 않는다는 것입니다.

// 예를 들어서 == 를 사용하면 숫자 1과 문자 '1' 이 동일한 값으로 간주됩니다.

// const E = 1;
// const F = '1';
// const equa = a == b;
// console.log(equa);
// 결과: true

// 그리고, 0 과 false 도 같은 값으로 간주되지요.

// const G = 0;
// const H = false;
// const equ = a == b;
// console.log(equals);
// 결과: true

// 그리고 undefined 와 null 도 같은 값으로 간주됩니다.

// const I = null;
// const J = undefined;
// const eq = a == b;
// console.log(eq);
// 결과: true

// 두 값이 일치하는지 비교 할 때에는 == 대신 === 를 사용 할 것을 권장 드립니다. == 를 사용하다보면 실수를 할 확률이 높아집니다.

/* 두 값이 일치하지 않는지 확인 */
// https://marsbranding.com/


/* 조건문 */
// if문

// ~한다면 ~~를 해라 를 의미함
// const a = 1;
// if (a + 1 === 2) {
//     console.log('a + 1 이 2 입니다.');
// }
// // a에 다른 값을 넣으면 실행이 안된다 이는 특정조건이 만족 될때에만 실행시킬수 있다
// if (조건) {
//   코드;
// }

// const a = 1;
// if (true) {
//   const a = 2;
//   console.log('if문 안의 a 값은 ' + a);
// }
// console.log('if문 밖의 a 값은 ' + a);

/* if-else 문 */
// if-else문은 "~~하다면 ~~하고, 그렇지 않다면 ~~해라."를 의미함

// const a = 10;
// if (a >= 15) {
//     console.log('a 가 15 큽니다.');
// } else {
//     console.log('a 가 15보다 크지 않습니다.');
// }

/* if-else if문 */
//if-else if문은 여러조건에 따라 작업을 해야 할 때에 사용합니다.

// const a = 5;
// if (a === 5) {
//     console.log('5입니다!');
// } else if (a === 10) {
//     console.log('10입니다!');
// } else {
//     console.log('5도 아니고 10도 아닙니다.');
// }

/* swich/case */
// 특정값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용합니다.
// const device = 'ipad';

// switch (device) {
//   case 'iphone':
//     console.log('아이폰!');
//     break;
//   case 'ipad':
//     console.log('아이패드!');
//     break;
//   case 'galaxy note':
//     console.log('갤럭시 노트!');
//     break;
//   default:
//     console.log('모르겠네요..');
// }

// evice 값을 'iphone', 'ipad', 'galaxy note', 'macbook' 으로 순서대로 바꿔가면서 코드를 실행해보세요.

// device 값에 따라서 다른 결과가 출력되고 있나요?

// switch/case 문은 이와 같이 특정 값이 무엇이냐에 따라 다른 작업을 수행 할 수 있게 해줍니다.

// switch/case 문에서는 각 case 에서 실행할 코드를 작성하고 맨 마지막에 break; 를 해주어야 합니다. break 를 하지 않으면 그 다음 case 의 코드까지 실행해버립니다.

// 그리고, 맨 아래의 default: 는 device 값이 우리가 case 로 준비하지 않은 값일 경우를 의미합니다.

/* 함수 */
// 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능입니다.

// const a = 1;
// const b = 2;
// const sum = a + b;
// console.log(a + b);

// function add(a, b) {
//   return a + b;
// }

// const sum = add(1, 2);
// console.log(sum);

// 함수를 만들 때는 function 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부릅니다.
// 함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정 할 수 있습니다.

// 추가적으로, return 을 하게 되면 함수가 끝납니다. 만약 다음과 같이 코드가 작성된다면, return 아래의 코드는 호출이 안됩니다.

// function add(a, b) {
//   return a + b;
//   console.log('호출이 되지 않는 코드!');
// }

// const sum = add(1, 2);
// console.log(sum);

/* 연습 */

// function hello(name) {
//   console.log('Hello,' + name + '!');
// }

// hello('안일혁')

// console.log 를 하게 될 때 우리는 문자열을 조합하기 위해서 + 연산자를 사용했습니다. 이렇게 문자열을 조합 할 때 + 를 사용해도 큰 문제는 없지만, 더욱 편하게 조합을 하는 방법이 있습니다. 바로, ES6 의 템플릿 리터럴 (Template Literal)이라는 문법을 사용하는 것 입니다.

// function hello(name) {
//   console.log(`Hello, ${name}!`);
// }
// hello('velopert');

//점수가 주어졌을 때 A, B, C, D, F 등급을 반환하는 함수를 만들어봅시다.

// function getGrade(score) {
//   if (score === 100) {
//     return 'A+';
//   } else if (score >= 90) {
//     return 'A';
//   } else if (score === 89) {
//     return 'B+';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score === 79) {
//     return 'C+';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score === 69) {
//     return 'D+';
//   } else if (score >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// const grade = getGrade();
// console.log(grade);

/* 화살표 함수 */
// 함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법을 사용하는 것 입니다.

// const add = (a, b) => {
//   return a + b;
// }

// console.log(add(1, 2));

// function 키워드 대신에 => 문자를 사용해서 함수를 구현했는데요, 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어온다.
// 그런데, 만약에 위와 같이 코드블록 내부에서 바로 return 을 하는 경우는 다음과 같이 줄여서 쓸 수도 있다.

// const add = (a, b) => a + b;
// console.log(add(1, 2));

/* 객체 */
// 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러종료의 값을 넣을수 있게 해줍니다.
// const dog = {
//   name: '멍멍이',
//   age: 2
// };

// console.log(dog.name);
// console.log(dog.age);

// 객체를 선언할때에는 이렇게 { } 문자안에 원하는 값들을 넣어주면 됩니다.
// 키 : 원하는 값

//형태로 넣으며, 키에 해당하는 부분은 공백이 없어야 합니다. 만약 공백이 있어야한다면 이를 따옴표로 감싸서 문자열로 넣어주면 됩니다.
// const sample = {
//     'key with space' : true
// };

// 예시
// const ironMan = {
//     name: '토니스타크',
//     actor: '로버트 다우니 주니어',
//     alias: '아이언맨'
// };

// const captainAmerica = {
//     name: '스티븐 로저스',
//     actor: '크리스 에반스',
//     alias: '캡틴 아메리카'
// };

// console.log (ironMan);
// console.log (captainAmerica);

// function print(hero) {
//     const { alias, name, actor } = hero;
//     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//     console.log(text);
// }
// function print({ alias, name, actor }) {
//     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//     console.log(text);
//   }

// print(ironMan);
// print(captainAmerica);

/* 객체 안에 함수 넣기 */
// 객체 안에 함수를 넣을 수도 있습니다. 
// const dog = {
//     name : '멍멍이',
//     sound: '멍멍!',
//     say: function say() {
//         console.log(this.sound, this.name);
//         console.log();
//     }
// };

// dog.say()

// 함수가 객체안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 된다
// 함수를 선언 할 때에는 이름이 없어도 됩니다.
// 객체 안에 함수를 넣을때, 화살표 함수로 선언 한다면 제대로 작동하지 않습니다.
// 이유는, function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문입니다.

/* getter함수와 setter 함수 */
//객체 안에 getter 함수와 setter 함수를 설정하는 방법을 알아봅시다. 객체를 만들고 나면 객체안의 값을 수정 할수도 있다.

// const numbers = {
//     a:1,
//     b:2
// };

// numbers.a = 5;
// console.log(numbers);
// Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있습니다.

// const numbers = {
//     a:1,
//     b:2,
//     get sum() {
//         console.log('sum 함수가 실행됩니다!');
//         return this.a + this.b;
//     }
// };

// console.log(numbers.sum);
// numbers.b = 5;
// console.log(numbers.sum);

// 우리는 numbers.sum() 을 한 것이 아니라 number.sum 을 조회했을 뿐인데, 함수가 실행되고 그 결과값이 출력되었습니다.

// 이런식으로 Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다.

const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      console.log('a가 바뀝니다.');
      this._a = value;
      this.calculate();
    },
    set b(value) {
      console.log('b가 바뀝니다.');
      this._b = value;
      this.calculate();
    }
  };
  
  console.log(numbers.sum);
  numbers.a = 5;
  numbers.b = 7;
  numbers.a = 9;
  console.log(numbers.sum);
  console.log(numbers.sum);
  console.log(numbers.sum);