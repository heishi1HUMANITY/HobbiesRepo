const dec_to_bin = dec => ('00000000' + dec.toString(2)).slice(-8);

console.log(dec_to_bin(255));
