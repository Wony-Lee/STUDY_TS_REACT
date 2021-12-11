TypeScript

-   1. code type 사용해보기
-   2. 타입 할당 및 타입 추론
       2-1 타입할당

```
// 미리 타입을 선언하는 것은 좋은 방법은 아니다.
let num1: number = 5;
// 하지만 값이 할당되지 않은 상태로 생성될 때는 무슨 타입이 들어갈 것 이라고 명시해주는 것이 좋다.
let num2: number; num2 = 5;
// type과 관련 없는 값을 할당하게 되면 타입스크립트는 소리를 지른다.
// 예시 => const str:string = 5 에러
```

```
Quiz 1
다음 코드는 컴파일 오류를 발생 시키는가?
let userName: string;
userName = 'Maximilian';
userName = false;
=> 타입이 string 인데 boolean 타입을 할당함.

Quiz 2
이 코드는 타입 추론에 의존하는가?
const age: number = 29;
=> 타입이 명시적으로 선언되어있기때문에 아님.

Quiz 3
자바스크립트 타입 (예. typeof 'Max' => 'string')과 타입스크립트 타입 (예. const name: string = '...')의 차이는 무엇인가?
=> 타입스크립트 타입은 컴파일 중에 확인되지만, 자바스크립트는 런타임 과정 중에 확인된다.
```

-   3. 객체 형태
-   4. 튜플
