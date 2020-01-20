const leibniz_formula = () => {
    let sum = 0;
    let i = 0;
    while(true){
        sum += Math.pow(-1, i) / (2 * i + 1);
        console.log(sum * 4);
        i++;
        if(i === 9007199254740991) break;
    }
};

leibniz_formula()