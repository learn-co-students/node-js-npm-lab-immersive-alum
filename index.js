require('./lib/greeter');

// function curryUp(a, b, c) {
//   return a + b + c;
// }
//
// const a = 1;
// const b = 2;
// const c = 3;
//
// curryUp(a, b, c);

const applyA = curryUp(a);
const applyB = applyA(b);
const applyC = applyB(c);

const allApplied = curryUp(a)(b)(c);
