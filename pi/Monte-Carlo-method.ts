const monte_carlo_method = () => {
    let x:number = 0;
    let n:number = 1;
    while(true){
        let rand:number[] = [Math.random(), Math.random()];
        if(Math.pow(rand[0], 2) + Math.pow(rand[1], 2) <= 1) x++;
        console.log(4 * x / n);
        n++;
        if(n === 9007199254740991) break;
    }
    console.log(4 * x / n);
};

monte_carlo_method();
