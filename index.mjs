
import { slowFibo, fastFibo } from './fibo-lib.mjs';

const limit = 44; // 1476 returns Infinity

console.log(`\n### --- fibonacci test [1 - ${limit}] --- ###`);

const bFast = true;
const bSlow = true;

let fastResult, slowResult = 0;
let fastTime, slowTime = 0;

for (let fn = 1; fn <= limit; fn++) {

  if (bFast) {
    fastTime = new Date().getTime();
    fastResult = fastFibo(fn);
    fastTime = new Date().getTime() - fastTime;
  }

  if (bSlow) {
    slowTime = new Date().getTime();
    slowResult = slowFibo(fn);
    slowTime = new Date().getTime() - slowTime;
  }

  let strFast = bFast ? `fast: ${fastResult}, ${fastTime / 1000} s` : "";
  let strSlow = bSlow ? `slow: ${slowResult}, ${slowTime / 1000} s` : "";
 
  console.log( `fn(${fn}) - ` + strFast + " " + strSlow );
}

console.log(`\n### --- --- --- --- --- --- ###`);
