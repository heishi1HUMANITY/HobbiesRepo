const gcd = (a, b) => (a % b === 0) ? b : gcd(b, a % b);

console.log(gcd(1071, 1029));
