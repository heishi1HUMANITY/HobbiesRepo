const encrypt = (str) => {
    let enc = new TextEncoder();
    let dec = new TextDecoder();
    let stringArrayUint8 = enc.encode(str);
    let stringArrayBin = [];
    for(let s of stringArrayUint8){
        stringArrayBin.push(('00000000000000000000000000000000' + s.toString(2)).slice(-32));
    }

    let key = [];
    let encryptedStringArrayBin = [];
    for(let i = 0; i < stringArrayBin.length; i++){
        let str = Array.from(stringArrayBin[i]);
        let k;
        let tmp;
        let flag = true;
        while(flag){
            flag = false;
            let rand = Math.floor(Math.random() * 4294967296);
            k = Array.from(('00000000000000000000000000000000' + rand.toString(2)).slice(-32));
            tmp = [];
            for(let j = 0; j < 32; j++){
                tmp.push(parseInt(str[j]) ^ parseInt(k[j]));
            }
            tmp = tmp.join('');
            for(let d of debugList){
                if(dec.decode(new Uint8Array([parseInt(tmp, 2)])) == dec.decode(new Uint8Array(d))){
                    flag = true;
                    break;
                }
            }
        }
        key.push(k.join(''));
        encryptedStringArrayBin.push(tmp);
    }
    
    let encryptedStringArrayUint8 = [];
    for(let s of encryptedStringArrayBin){
        encryptedStringArrayUint8.push(parseInt(s, 2));
    }
    encryptedStringArrayUint8 = new Uint8Array(encryptedStringArrayUint8);
    
    let encryptedString = dec.decode(encryptedStringArrayUint8);

    return [encryptedString, key];
};

const decrypt = (encryptedString, key) => {
    let enc = new TextEncoder();
    let dec = new TextDecoder();
    let encryptedStringArrayUint8 = enc.encode(encryptedString);
    let encryptedStringArrayBin = [];
    for(let s of encryptedStringArrayUint8){
        encryptedStringArrayBin.push(('00000000000000000000000000000000' + s.toString(2)).slice(-32));
    }

    let decryptedStringArrayBin = [];
    for(let i = 0; i < encryptedStringArrayBin.length; i++){
        let str = Array.from(encryptedStringArrayBin[i]);
        let k = Array.from(key[i]);
        let tmp = [];
        for(let j = 0; j < 32; j++){
            tmp.push(parseInt(str[j]) ^ parseInt(k[j]));
        }
        decryptedStringArrayBin.push(tmp.join(''));
    }

    let decryptedStringArrayUint8 = [];
    for(let s of decryptedStringArrayBin){
        decryptedStringArrayUint8.push(parseInt(s, 2));
    }
    decryptedStringArrayUint8 = new Uint8Array(decryptedStringArrayUint8);

    let decryptedString = dec.decode(decryptedStringArrayUint8);

    return decryptedString;
};

let debugList = [[239,191,189], [13], [10], [32], [32, 32, 32, 32], [227, 128, 128], [9], [29], [0], [127], [12]]