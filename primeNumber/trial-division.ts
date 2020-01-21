const trial_division = (num:number) => {
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
};

console.log(trial_division(9871));
