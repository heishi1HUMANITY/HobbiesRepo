const sieve_of_eratosthenes = num => {
    let array = [];
    for(let i = 5; i <= num; i+=2){
        if(i%3!=0) array.push(i);
    }
    let tmpArray = [];
    tmpArray.push(2,3);
    while(array[0] <= Math.sqrt(num)){
        tmpArray.push(array[0]);
        let firstNum = array[0];
        for(let i = 0; i < array.length; i++){
            if(array[i] % firstNum == 0){
                array.splice(i,1);
                i--;
            }
        }
    }
    for(let e of array){
        tmpArray.push(e);
    }
    return tmpArray;
};

for(let e of sieve_of_eratosthenes(10000)){
    console.log(e);
}
