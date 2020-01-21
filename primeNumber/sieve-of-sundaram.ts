const sieve_of_sundaram = (num:number) => {
    let array:number[] = [];
    for(let i = 1; i <= num; i++){
        array.push(i);
    }
    let i:number = 1, j:number = 1;
    while(true){
        j = i;
        if(i + j + (2 * i * j) > num) break;
        while(i + j + (2 * i * j) <= num){
            for(let k = 0; k < array.length; k++){
                if(array[k] === i + j + (2 * i * j)){
                    array.splice(k, 1);
                    k--;
                }
            }
            j++;
        }
        i++;
    }
    let tmp:number[] = [2];
    for(let e of array){
        tmp.push(2 * e + 1);
    }
    return tmp;
};

console.log(sieve_of_sundaram(100));
