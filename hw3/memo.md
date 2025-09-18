# TypeScript 핵심 정리 📝

이 문서는 최신 Node.js 및 React 환경을 기준으로, 타입스크립트의 핵심 개념과 `tsconfig.json` 설정 방법을 정리한 스터디 노트입니다.

## `tsconfig.json`: 타입스크립트 설정 파일 ⚙️

`tsconfig.json` 파일은 타입스크립트 컴파일러가 어떻게 동작할지를 정의하는 설정 파일입니다. 매우 엄격하고 현대적인 프로젝트를 위한 핵심 설정은 다음과 같습니다.

### **핵심 설정 🎯**

  - `"outDir": "./dist"`: 타입스크립트(.ts)를 자바스크립트(.js)로 변환한 결과물을 저장할 폴더를 지정합니다.
  - `"module": "nodenext"`: 최신 Node.js 환경에 맞는 모듈 시스템을 사용합니다.
  - `"target": "esnext"`: 가장 최신 버전의 자바스크립트 문법으로 변환합니다.
  - `"jsx": "react-jsx"`: React의 JSX 문법을 사용하기 위한 필수 설정입니다.

### **타입 검사 강화 설정 💪**

코드의 안정성을 높이고 잠재적인 버그를 미리 잡기 위한 엄격한 설정들입니다.

  - `"strict": true"`: **가장 중요합니다\!** 모든 엄격한 타입 검사 규칙을 활성화하여 코드의 안정성을 대폭 향상시킵니다.
  - `"noUncheckedIndexedAccess": true"`: 배열이나 객체에 존재하지 않을 수 있는 값에 접근할 때(`myArray[100]`), `undefined`가 될 수 있음을 명시적으로 알려주어 실수를 방지합니다.

### **모듈 및 빌드 관련 설정 🛠️**

최신 개발 도구(Vite, Babel 등)와의 호환성을 높이고 빌드 과정을 최적화합니다.

  - `"verbatimModuleSyntax": true"`: `import` 구문을 작성한 그대로 유지하여 코드 명확성과 도구 호환성을 높입니다.
  - `"isolatedModules": true"`: 각 파일을 독립적인 모듈로 변환하도록 강제하여 최신 번들러와 함께 사용할 때 필요합니다.
  - `"skipLibCheck": true"`: 외부 라이브러리(`node_modules`)의 타입 검사를 건너뛰어 전체 컴파일 속도를 향상시킵니다.

### **개발 편의성 설정 ✨**

  - `"sourceMap": true"`: 변환된 자바스크립트 코드에서도 원래의 타입스크립트 코드를 보며 디버깅할 수 있게 해주는 아주 유용한 기능입니다. 🐛
  - `"declaration": true"`: 이 프로젝트가 라이브러리일 경우, 타입 정보를 담은 선언 파일(`.d.ts`)을 자동으로 생성해줍니다.

-----

## 타입스크립트 시작하기: `tsc` 컴파일

타입스크립트 코드는 `tsc` 명령어를 통해 자바스크립트로 컴파일됩니다.

  - **`src/practice.ts`** (원본 타입스크립트)
    ```typescript
    const msg: string = 'hello world';
    console.log(msg);
    ```
  - **`dist/practice.js`** (컴파일된 자바스크립트)
    ```javascript
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const msg = 'hello world';
    console.log(msg);
    //# sourceMappingURL=practice.js.map
    ```
    > **컴파일 과정에서 타입(`: string`) 정보는 사라지고, 순수한 자바스크립트 코드로 변환된 것을 확인할 수 있습니다.**

## 타입스크립트의 기본 타입들

타입스크립트는 변수나 상수에 타입을 지정하여 코드의 의도를 명확하게 하고 실수를 방지합니다.

```typescript
// 타입 추론: count는 number 타입으로 자동 지정됨
let count = 0;
count++;

// count = "raise error"; // Error: Type 'string' is not assignable to type 'number'.

// 타입 명시
const msg: string = 'hello world';
const done: boolean = true;
const numbers: number[] = [1, 2, 3];
const msgs: string[] = ['hello', 'world'];

// msgs.push(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// 여러 타입을 허용 (Union Type)
let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

// 정해진 값만 허용 (Literal Type)
let color: 'red' | 'orange' | 'yellow' = 'yellow';
color = 'red';
```

-----

## 함수에서 타입 정의하기

함수의 매개변수와 반환 값에 타입을 지정하여 함수의 동작을 명확하게 정의할 수 있습니다.

```typescript
// 매개변수와 반환 값에 타입을 지정
function sum(x: number, y: number): number {
    // return null; // Error: Type 'null' is not assignable to type 'number'.
    return x + y;
}
sum(1, 2);

// 배열을 매개변수로 받는 함수
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

// 반환 값이 없는 함수는 'void'로 지정
function returnNothing(): void {
    console.log("Hi, I return nothing!");
}
```

-----

## `interface`: 객체의 구조 정의하기

`interface`는 클래스나 객체가 가져야 할 구조를 정의하는 데 사용됩니다.

### **클래스(Class)에 적용**

`implements` 키워드를 사용하여 클래스가 특정 인터페이스의 구조를 따르도록 강제할 수 있습니다.

```typescript
interface Shape {
  getArea(): number; // getArea 메소드는 number를 반환해야 함
}

// 'private' 또는 'public' 접근 제어자를 생성자에서 바로 사용하여 코드를 간결하게 작성
class Circle implements Shape {
  constructor(private radius: number) {}

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => console.log(shape.getArea()));
```

### **일반 객체(Object)에 적용**

객체의 형태를 정의하고, `extends`를 통해 인터페이스를 확장할 수 있습니다.

```typescript
interface Person {
  name: string;
  age?: number; // '?'는 선택적 속성(Optional Property)을 의미
}

// Person 인터페이스를 상속받아 확장
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "Charles",
  age: 80
};

const expert: Developer = {
  name: "Linus",
  skills: ['C', 'Linux']
};

const people: Person[] = [person, expert];
console.log(people);
// [
//   { name: 'Charles', age: 80 },
//   { name: 'Linus', skills: [ 'C', 'Linux' ] }
// ]
```

-----

## `type`: 타입에 별칭 붙이기

`type`은 기존 타입에 새로운 이름을 붙이거나, 여러 타입을 조합하여 복잡한 타입을 만드는 데 사용됩니다.

```typescript
type Person = {
  name: string;
  age?: number; // '?'는 선택적 속성을 의미
};

// Intersection Type('&')을 사용하여 두 타입을 합침
type Developer = Person & {
  skills: string[];
};

const person: Person = { name: "Charles", age: 80 };
const expert: Developer = { name: "Linus", skills: ['C', 'Linux'] };

// 타입을 배열 형태로도 지정 가능
type People = Person[];
const people: People = [person, expert];
console.log(people);

// Union Type을 사용하여 특정 값들만 허용하는 타입을 생성
type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
console.log(color, colors);
```

### `type` vs `interface` 비교

| 구분         | **`interface`** | **`type`** |
| ------------ | -------------------------------------------------- | ---------------------------------------------------- |
| **주요 용도** | 객체, 클래스의 구조를 정의할 때                    | 타입에 별칭을 붙이거나, Union, Intersection 등 복잡한 타입을 만들 때 |
| **확장 방식** | `extends` 키워드 사용 (상속과 유사)                | `&` (Intersection Type) 사용                         |
| **선언 병합** | 동일 이름으로 여러 번 선언 시 자동으로 합쳐짐      | 불가능 (동일 이름으로 선언 시 에러 발생)             |
| **권장 사용** | **클래스**의 구조를 정의하거나 **객체**의 타입을 지정할 때 | **일반 객체 타입**, **Union/Literal 타입** 등을 정의할 때    |

> 간단히 말해, 클래스와 관련된 타입을 정의할 때는 `interface`를, 그 외의 경우에는 `type`을 사용하는 것이 일반적인 규칙입니다.

## Generics

[Generics](memo2.md)