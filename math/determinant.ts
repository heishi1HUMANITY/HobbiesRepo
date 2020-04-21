const det = (array:number[][]) => {
    const sarrus = (array:number[][]) => array[0][0] * array[1][1] - (array[0][1] * array[1][0]);
    const expansion = (array:number[][]) => {
        let length:number = array.length;
        let ans:number = 0;
        for(let i = 0; i < length; i++){
            let tmp:number[][] = JSON.parse(JSON.stringify(array));
            for(let j = 0; j < length; j++){
                tmp[j].splice(i,1);
            };
            tmp.splice(0, 1);
            ans += Math.pow(-1, (1 + i + 1)) * array[0][i] * det(tmp);
        }
        return ans;
    };
    if(array.length == 2) return sarrus(array);
    else return expansion(array);
};
console.log(
    det(
        [[1,2,3],
         [4,5,6],
         [7,8,9]]
    )
);
