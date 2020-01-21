const leibniz_formula = () => {
    let pi:number = 0, n:number = 0;
    while(true){
        pi += Math.pow(-1, n) / (2 * n + 1);
        console.log(pi * 4);
        if(n === 9007199254740991) break;
        n++;
    }
    console.log(pi * 4);
};

leibniz_formula();
