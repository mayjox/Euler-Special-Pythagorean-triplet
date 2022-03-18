function test(target) {
  for (let a = 1; a < target; a++)
    for (let b = 1; b < a; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      sum = a + b + c;
      if (sum == target) {
        return { a, b, c, sum, product: a * b * c };
      }
    }
  return null;
}

console.log(test(1000));
