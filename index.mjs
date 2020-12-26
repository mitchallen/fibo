
import {slowFibo, fastFibo} from './fibo-lib.mjs';

const fn = 44;

console.log(`\n### --- fibonacci: ${fn} --- ###`);

let fastTime = new Date().getTime();
console.log("FAST");
const fast = fastFibo(fn);
fastTime = new Date().getTime() - fastTime;
console.log(` ... fast: ${fast}, ${fastTime/1000} s`);

let slowTime = new Date().getTime();
console.log("SLOW");
const slow = slowFibo(fn);
slowTime = new Date().getTime() - slowTime;
console.log(` ... slow: ${slow}, ${slowTime/1000} s`);

console.log(`\n### --- --- --- --- --- --- ###`);

