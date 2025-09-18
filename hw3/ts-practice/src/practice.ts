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
