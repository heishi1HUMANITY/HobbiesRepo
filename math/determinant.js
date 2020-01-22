const det = array => {
    const det2 = array => {
        let ans = array[0][0] * array[1][1] - (array[0][1] * array[1][0]);
        return ans;
    };
    const det3 = array => {
        let ans = 0;
        let j = 1, k = 2;
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
    const detOver = array => {
        let length = array.length;
        let ans = 0;
        for(let i = 0; i < length; i++){
            let tmp = JSON.parse(JSON.stringify(array));
            for(let j = 0; j < length; j++){
                tmp[j].splice(i,1);
            };
            tmp.splice(0, 1);
            ans += Math.pow(-1, (1 + i + 1)) * array[0][i] * det(tmp);
        }
        return ans;
    };
    let res;
    if(array.length == 2) res = det2(array);
    else if(array.length == 3) res = det3(array);
    else res = detOver(array);
    return res;
};

console.log(
    det(
        [[4,2,-4,2],
         [0,2,-1,-2],
         [5,2,-2,0],
         [2,1,-2,3]]
    )
);
