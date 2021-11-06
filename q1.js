function q1(n, k) {
  if (k == 0) throw Error("cant divide by zero");
  for (var i = 0; i < k; i++) {
    n = n / 2;
  }
  return Math.floor(n);
}

console.info(q1(17, 3));
console.info(q1(29, 4));
