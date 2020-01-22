const det = (array:number[][]) => {
    const det2 = (array:number[][]) => array[0][0] * array[1][1] - (array[0][1] * array[1][0]);
    const det3 = (array:number[][]) => {
        let ans:number = 0;
        let j:number = 1, k:number = 2;
        for(let i = 0; i <= 2; i++){
            ans += array[0][i] * array[1][j] * array[2][k];
            j++;
            k++;
            if(j == 3) j = 0;
            if(k == 3) k = 0;
        }
        j = 2, k = 1;
        for(let i = 0; i <= 2; i++){
            ans += -(array[0][i] * array[1][j] * array[2][k]);
            j++;
            k++;
            if(j == 3) j = 0;
            if(k == 3) k = 0;
        }
        return ans;
    };
    const detover = (array:number[][]) => {
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
    if(array.length == 2) return det2(array);
    else if(array.length == 3) return det3(array);
    else return detover(array);
};
console.log(
    det(
        [[2,0,1,-1],
         [3,-3,0,-2],
         [-2,3,2,3],
         [2,-6,2,-4]]
    )
);
