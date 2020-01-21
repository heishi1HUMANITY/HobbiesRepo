let maxScore:number[] = [], reduceScore:number[] = [], time:number[] = [], array:number[] = [];
for(let i = 1; i <= 100000; i++){
    array.push(i);
}

const max = async (array:number[], a:number) => {
    Math.max(...array);
    maxScore.push(Date.now() - time[a]);
};
const reduce = async (array:number[], a:number) => {
    array.reduce((a:number, b:number) => (a > b) ? a : b);
    reduceScore.push(Date.now() - time[a]);
};

for(let i = 0; i <= 1000; i++){
    time.push(Date.now());
    if(i != 1000) max(array, i);
    else{
        max(array, i).then(() => {
            let sum = 0;
            for(let e of maxScore){
                sum += e;
            }
            console.log(`MAX():${sum / maxScore.length}`);
            time = [];
            for(let i = 0; i <= 1000; i++){
                time.push(Date.now());
                if(i != 1000) reduce(array, i);
                else{
                    reduce(array, i).then(() => {
                        let sum = 0;
                        for(let e of reduceScore){
                            sum += e;
                        }
                        console.log(`REDUCE():${sum / reduceScore.length}`);
                    })
                }
            }
        })
    }
}
