const sieve_of_eratosthenes = (num:number) => {
    let array:number[] = [];
    for(let i = 5; i <= num; i+=2){
        if(i % 3 !== 0) array.push(i);
    }
    let tmpArray:number[] = [2,3];
    while(array[0] <= Math.sqrt(num)){
        tmpArray.push(array[0]);
        let first:number = array[0]; 
        for(let i = 0; i < array.length; i++){
            if(array[i] % first === 0){
                array.splice(i, 1);
                i--;
            }
        }
    }
    array = [...tmpArray,...array];
    return array;
};

console.log(sieve_of_eratosthenes(202));
