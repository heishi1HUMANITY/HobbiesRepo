const gauss_legendre = () => {
    let a = 1;
    let b = 1 / Math.sqrt(2);
    let t = 1 / 4;
    let p = 1;
    for(let i = 0; i <= 5; i++){
        let tmpa = a;
        let tmpb = b;
        let tmpt = t;
        let tmpp = p;
        a = (tmpa + tmpb) / 2;
        b = Math.sqrt(tmpa * tmpb);
        t = tmpt - tmpp * Math.pow(tmpa - a, 2);
        p = 2 * tmpp;
        console.log(Math.pow(a + b, 2) / (4 * t)); 
    }
};

gauss_legendre();
