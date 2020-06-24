const QR = (state, x, y, z, w) => {
    a = state[x], b = state[y], c = state[z], d = state[w];
    b = b ^ ((a + b) & 0xffffffff); b = (b << 7) | (b >>> 7);
    c = c ^ ((b + a) & 0xffffffff); c = (c << 9) | (c >>> 9);
    d = d ^ ((c + b) & 0xffffffff); d = (d << 13) | (d >>> 13);
    a = a ^ ((d + c) & 0xffffffff); a = (a << 18) | (a >>> 18);
    state[x] = a, state[y] = b, state[z] = c, state[w] = d
};

const double_round = state => {
    QR(state, 0, 4, 8, 12);
    QR(state, 5, 9, 13, 1);
    QR(state, 10, 14, 2, 6);
    QR(state, 15, 3, 7, 11);

    QR(state, 0, 1, 2, 3);
    QR(state, 5, 6, 7, 4);
    QR(state, 10, 11, 8, 9);
    QR(state, 15, 12, 13, 14);
};

const salsa20_block = (key, pos, nonce) => {
    // key => Uint32Array(8) (256 bit integer)
    // pos => 32 bit integer
    // nonce => Uint32Array(2) (64 bit integer)

    let state = new Uint32Array(16);
    state[0] = 0x61707865;
    state[5] = 0x3320646e;
    state[10] = 0x79622d32;
    state[15] = 0x6b206574;
    for(let i = 1; i <= 4; i++){
        state[i] = key[i - 1];
    }
    state[6] = nonce[0]; state[7] = nonce[1];
    state[8] = pos & 0xffffffff; state[9] = (pos + 1) & 0xffffffff;
    for(let i = 11; i <= 14; i++){
        state[i] = key[i - 7];
    }

    let initial_state = new Uint32Array(state);

    for(let i = 0; i < 10; i++){
        double_round(state);
    }

    for(let i = 0; i < 16; i++){
        state[i] = (state[i] + initial_state[i]) & 0xffffffff;
    }

    let block = [];
    for(let i = 0; i < 16; i++){
        block.push(state[i] & 0x000000ff);
        block.push((state[i] & 0x0000ff00) >>> 8);
        block.push((state[i] & 0x00ff0000) >>> 16);
        block.push((state[i] & 0xff000000) >>> 24);
    }

    return new Uint8Array(block);
};


const salsa20_encrypt = (key, pos, nonce, plaintext) => {
    // key => Uint32Array(8) (256 bit integer)
    // pos => 32 bit integer
    // nonce => Uint32Array(2) (64 bit integer)
    // plaintext => Uint8Array
    
    let encrypted_message = [];

    if(plaintext.length <= 64){
        let key_block = salsa20_block(key, pos, nonce);
        for(let i = 0; i < plaintext.length; i++){
            encrypted_message.push(plaintext[i] ^ key_block[i]);
        }
        return new Uint8Array(encrypted_message);
    }

    for(let i = 0; i < Math.floor(plaintext.length / 64); i++){
        let key_block = salsa20_block(key, pos+i, nonce);
        for(let j = 0; j < 64; j++){
            encrypted_message.push(plaintext[i * 64 + j] ^ key_block[j]);
        }
    }

    if(plaintext.length % 64){
        let d = Math.floor(plaintext.length / 64);
        let key_block = salsa20_block(key, pos + d, nonce);
        for(let i = 0; i < plaintext.length % 64; i++){
            encrypted_message.push(plaintext[d * 64 + i] ^ key_block[i]);
        }
    }

    return new Uint8Array(encrypted_message);
};

let enc = new TextEncoder();
let dec = new TextDecoder();
let string = 
`Dramatis Personæ
HAMLET, Prince of Denmark.
CLAUDIUS, King of Denmark, Hamlet’s uncle.
The GHOST of the late king, Hamlet’s father.
GERTRUDE, the Queen, Hamlet’s mother, now wife of Claudius.
POLONIUS, Lord Chamberlain.
LAERTES, Son to Polonius.
OPHELIA, Daughter to Polonius.
HORATIO, Friend to Hamlet.
FORTINBRAS, Prince of Norway.
VOLTEMAND, Courtier.
CORNELIUS, Courtier.
ROSENCRANTZ, Courtier.
GUILDENSTERN, Courtier.
MARCELLUS, Officer.
BARNARDO, Officer.
FRANCISCO, a Soldier
OSRIC, Courtier.
REYNALDO, Servant to Polonius.
Players.
A Gentleman, Courtier.
A Priest.
Two Clowns, Grave-diggers.
A Captain.
English Ambassadors.
Lords, Ladies, Officers, Soldiers, Sailors, Messengers, and Attendants.`;
for(let i = 1; i <= 10; i++){
    let key = new Uint32Array(8);
    for(let j = 0; j < 8; j++){
        let tmp = [];
        for(let k = 0; k < 32; k++){
            tmp.push((Math.random() >= 0.5) ? 1 : 0);
        }
        key[j] = parseInt(tmp.join(''), 2);
    }
    let nonce = new Uint32Array(2);
    for(let j = 0; j < 2; j++){
        let tmp = [];
        for(let k = 0; k < 32; k++){
            tmp.push((Math.random() >= 0.5) ? 1 : 0);
        }
        nonce[j] = parseInt(tmp.join(''), 2);
    }
    let string_int = enc.encode(string);
    let encrypted = salsa20_encrypt(key, i, nonce, string_int);
    console.log('key: ' + key + ' nonce: ' + nonce + ' pos: ' + i);
    console.log('encrypted');
    console.log(encrypted);
    // console.log();
    // console.log('enc');
    // console.log(encrypted);
    let decrypted = salsa20_encrypt(key, i, nonce, encrypted);
    // console.log('dec');
    // console.log(decrypted);
    console.log('decode');
    console.log(dec.decode(decrypted));
    console.log();
}