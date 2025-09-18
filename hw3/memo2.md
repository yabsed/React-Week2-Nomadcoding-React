# TS 2

## Generics

### 문제상황

```typescript
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

console.log(merged)
// { foo: 1, bar: 1 }
```

하지만 이렇게 하면 merged의 타입을 유추하기 어렵다. 

### 해결

```typescript
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

// const merged: {
//     foo: number;
// } & {
//     bar: number;
// }

function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);

// const wrapped: {
//     param: number;
// }

```

이렇게 하면 임의의 파라미터에 대해서도 어느 정도의 타입 지원을 지켜낼 수 있다. 