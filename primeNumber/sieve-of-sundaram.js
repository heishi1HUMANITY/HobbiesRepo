const sieve_of_sundaram = num => {
    let array = [];
    for(let i = 1; i <= num; i++){
        array.push(i);
    }
    let i = 1;
    let j = 1;
    while(true){
        while(i <= j && i + j + (2 * i * j) <= num){
            for(let k = 0; k < array.length; k++){
                if(array[k] == i + j + (2 * i * j)){
                    array.splice(k,1);
                    k--;
                }
            }
            i++;
        }
        j++;
        i = 1;
        if(i + j + (2 * i * j) > num) break
    }
    let tmp = [2];
    for(let e of array){
        tmp.push(e * 2 + 1);
    }
    return tmp;
};

for(let e of sieve_of_sundaram(10000)){
    console.log(e);
}
