const gcd = (...args:number[]):number => args.reduce((a:number, b:number) => {
    const euclidean_algorithm = (a:number, b:number) => a % b === 0 ? b : euclidean_algorithm(b, a % b);
    return euclidean_algorithm(a, b);
});

console.log(gcd(32,64,80));