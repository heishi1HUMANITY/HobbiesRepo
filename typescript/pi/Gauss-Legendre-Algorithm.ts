const gauss_legendre_algorithm = () => {
    let a:number = 1, b:number = 1 / Math.sqrt(2), t:number = 1 / 4, p:number = 1;
    for(let i = 0; i <= 5; i++){
        let tmpa:number = a, tmpb:number = b, tmpt:number = t, tmpp:number = p;
        a = (tmpa + tmpb) / 2;
        b = Math.sqrt(tmpa * tmpb);
        t = tmpt - tmpp * Math.pow(tmpa - a, 2);
        p = 2 * tmpp;
        console.log(Math.pow(a + b, 2) / (4 * t));
    }
};

gauss_legendre_algorithm();
