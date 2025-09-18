# Study TS

## `tsconfig.json`

이 `tsconfig.json` 파일은 **최신 Node.js 환경에서 리액트(React)를 사용하는, 매우 엄격하고 현대적인 타입스크립트 프로젝트를 위한 설정**입니다. 초보자가 알아야 할 핵심 설정들을 쉽게 정리해 드릴게요.

---

### 핵심 설정 🎯

* `"outDir": "./dist"`: 타입스크립트 코드(.ts)를 자바스크립트(.js)로 변환(컴파일)했을 때, 그 **결과물이 저장될 폴더**를 지정합니다. 보통 `dist` 폴더에 결과물이 생겨요.
* `"module": "nodenext"`, `"target": "esnext"`: **최신 Node.js 환경**에 맞는 모듈 시스템과 **가장 최신 버전의 자바스크립트 문법**을 사용하겠다는 의미입니다.
* `"jsx": "react-jsx"`: 리액트의 **JSX 문법**(자바스크립트 파일 안에 HTML처럼 생긴 코드를 작성하는 것)을 사용하기 위한 필수 설정입니다.

---

### 타입 검사 강화 설정 💪

이 설정들은 코드의 버그를 미리 잡기 위해 **타입스크립트 컴파일러를 매우 꼼꼼하게 만드는 옵션**들입니다.

* `"strict": true"`: **가장 중요합니다!** 타입스크립트의 모든 엄격한 검사 규칙을 활성화해서 코드의 안정성을 크게 높여줍니다. 초보자에게는 조금 까다롭게 느껴질 수 있지만, 잠재적인 버그를 예방하는 데 최고의 설정입니다.
* `"noUncheckedIndexedAccess": true"`: 배열이나 객체에서 특정 값에 접근할 때(`myArray[100]`), 그 값이 실제로 존재하지 않아 `undefined`가 될 수 있는 가능성을 항상 알려줍니다. 실수를 방지하는 좋은 기능이에요.

---

### 모듈 및 빌드 관련 설정 ⚙️

이 설정들은 코드를 모듈로 관리하고, 최신 개발 도구(번들러)와 잘 호환되도록 돕습니다.

* `"verbatimModuleSyntax": true"`: `import` 구문을 작성한 그대로 유지하여 코드를 더 명확하게 하고, 빌드 도구와의 호환성을 높입니다.
* `"isolatedModules": true"`: 각 파일을 독립적으로 변환할 수 있도록 강제하는 설정입니다. Vite, Babel 같은 **최신 번들러와 함께 사용할 때 필요**합니다.
* `"skipLibCheck": true"`: 내가 설치한 외부 라이브러리(node_modules)의 타입까지 검사하지는 않아서, **전체적인 컴파일 속도를 높여줍니다.**

---

### 개발 편의성 설정 🛠️

* `"sourceMap": true"`: 코드가 자바스크립트로 변환된 후에도, 브라우저 개발자 도구에서 원래의 **타입스크립트 코드를 보면서 디버깅**할 수 있게 해주는 아주 유용한 기능입니다. 🐛
* `"declaration": true"`: 만약 이 프로젝트를 다른 사람이 가져다 쓸 라이브러리로 만든다면, 코드의 타입 정보를 담은 파일(`.d.ts`)을 자동으로 생성해줍니다.

## my fist `tsc`
- `src/practice.ts`
    ```
    const msg: string = 'hello world'; 
    console.log(msg); 
    ```

- `dist/practice.js`
    ```
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const msg = 'hello world';
    console.log(msg);
    //# sourceMappingURL=practice.js.map%   
    ```
    - **컴파일 과정**에서 타입이 사라졌다. 

## TS의 타입들

```
let count = 0; 
count ++; 

// error!
// count = "raise error"; 

const msg: string = 'hello world'; 
const done: boolean = true; 

const numbers: number[] = [1,2,3]; 
const msgs: string[] = ['hello', 'world']; 

// error!
// msg.push(1); 

let mightBeUndefined: string | undefined = undefined; 
let nullableNumber: number | null = null; 

let color: 'red' | 'orange' | 'yellow' = 'yellow'; 

color = 'red'; 

// error!
// color = 'blue'; 
```