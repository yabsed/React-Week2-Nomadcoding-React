"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(a, b) {
    return {
        ...a,
        ...b
    };
}
const merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
console.log(wrapped);
//# sourceMappingURL=practice.js.map