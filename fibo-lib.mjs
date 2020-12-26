

export const slowFibo = function(num) {
  if (num <= 1) return 1;
  return slowFibo(num - 1) + slowFibo(num - 2);
};

export const fastFibo = function(num, memo = {}) {
  // console.log(num, memo)
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  return memo[num] = fastFibo(num - 1, memo) + fastFibo(num - 2, memo);
}
