const QR = (state, x, y, z, w) => {
    a = state[x], b = state[y], c = state[z], d = state[w];
    a = (a + b) & 0xffffffff; d = d ^ a; d = (d << 16) | (d >>> 16);
    c = (c + d) & 0xffffffff; b = b ^ c; b = (b << 12) | (b >>> 12);
    a = (a + b) & 0xffffffff; d = d ^ a; d = (d << 8) | (d >>> 8);
    c = (c + d) & 0xffffffff; b = b ^ c; b = (b << 7) | (b >>> 7);
    state[x] = a, state[y] = b, state[z] = c, state[w] = d;
};

const double_round = state => {
    QR(state, 0, 4, 8, 12);
    QR(state, 1, 5, 9, 13);
    QR(state, 2, 6, 10, 14)
    QR(state, 3, 7, 11, 15)

    QR(state, 0, 5, 10, 15);
    QR(state, 1, 6, 11, 12);
    QR(state, 2, 7, 8, 13);
    QR(state, 3, 4, 9, 14);
};

const chacha20_block = (key, pos, nonce) => {
    // key => Uint32Array(8) (256 bit integer)
    // pos => 32 bit integer
    // nonce => Uint32Array(2) (64 bit integer)
    
    let state = new Uint32Array(16);
    state[0] = 0x61707865;
    state[1] = 0x3320646e;
    state[2] = 0x79622d32;
    state[3] = 0x6b206574;
    for(let i = 4; i <= 11; i++){
        state[i] = key[i - 4];
    }
    state[12] = pos; state[13] = pos + 1;
    state[14] = nonce[0]; state[15] = nonce[1];

    let initial_state = new Uint32Array(state);

    for(let i = 0; i < 10; i++){
        double_round(state);
    }

    for(let i = 0; i <= 15; i++){
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

const chacha20_encrypt = (key, pos, nonce, plaintext) => {
    // key => Uint32Array(8) (256 bit integer)
    // pos => 32 bit integer
    // nonce => Uint32Array(2) (64 bit integer)
    // plaintext => Uint8Array
    
    let encrypted_message = [];

    if(plaintext.length <= 64){
        let key_block = chacha20_block(key, pos, nonce);
        for(let i = 0; i < plaintext.length; i++){
            encrypted_message.push(plaintext[i] ^ key_block[i]);
        }
        return new Uint8Array(encrypted_message);
    }

    for(let i = 0; i < Math.floor(plaintext.length / 64); i++){
        let key_block = chacha20_block(key, pos+i, nonce);
        for(let j = 0; j < 64; j++){
            encrypted_message.push(plaintext[i * 64 + j] ^ key_block[j]);
        }
    }

    if(plaintext.length % 64){
        let d = Math.floor(plaintext.length / 64);
        let key_block = chacha20_block(key, pos + d, nonce);
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
    // console.log(chacha20_block(key, i, nonce));
    let string_int = enc.encode(string);
    let encrypted = chacha20_encrypt(key, i, nonce, string_int);
    console.log('key: ' + key + ' nonce: ' + nonce + ' pos: ' + i);
    console.log('encrypted');
    console.log(encrypted);
    // console.log();
    // console.log('enc');
    // console.log(encrypted);
    let decrypted = chacha20_encrypt(key, i, nonce, encrypted);
    // console.log('dec');
    // console.log(decrypted);
    console.log('decode');
    console.log(dec.decode(decrypted));
    // console.log();
}