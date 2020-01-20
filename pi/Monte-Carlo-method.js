const monte_carlo_method = () => {
    let n = 1;
    let x = 0;
    while(true){
        let rand = [Math.random(), Math.random()];
        if(Math.pow(rand[0], 2) + Math.pow(rand[1], 2) <= 1)x++;
        console.log(4 * x / n);
        n++;
        if(n === 9007199254740991) break;
    }
};

monte_carlo_method();
