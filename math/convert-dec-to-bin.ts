const dec_to_bin = (dec:number) => ('0000000000' + dec.toString(2)).slice(-8);

console.log(dec_to_bin(255));
