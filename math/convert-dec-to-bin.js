const dec_to_bin = num => ('0000000000' + num.toString(2)).slice(-8);

console.log(`${dec_to_bin(10)}.${dec_to_bin(138)}.${dec_to_bin(10)}.${dec_to_bin(140)}`);
console.log(`${dec_to_bin(255)}.${dec_to_bin(255)}.${dec_to_bin(224)}.${dec_to_bin(0)}`)
