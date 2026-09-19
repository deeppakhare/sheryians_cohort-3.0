"use strict";
// let sum = (a: number, b: () => number): number => {
//   console.log(a);
//   let data = b();
//   return a + data;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// // let res: number = sum(78, 78);
// // console.log(res);
// let val = sum(78, () => 56);
// console.log(val);
// let sum = (a: number) => (b?: number) => {
//   if (b !== undefined) return sum(a + b);
//   return a;
// };
// let data = sum(23)(45)();
// console.log(data);
let sum = (...rest) => {
    let data = rest.reduce((a, v) => a + v, 0);
    return data;
};
let res = sum(67, 78, 90, 87, 6, 5, 4, 3, 2, 6, 4, 5, 6);
console.log(res);
//# sourceMappingURL=index.js.map