let newtonRoot = (x:number) => {
    let xn:number = 1.0;
    while(true){
        xn = xn - ((xn * xn - x) / (2 * xn));
        if(Math.abs(x - xn * xn) <= 0.00001) break;
    }
    return xn;
};

console.log(newtonRoot(2));