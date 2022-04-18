const Crypto = require('crypto-js');

function encrypt(password) {
    // return Crypto.createHmac('sha256', 'kuncirahasia').update(password).digest('hex'); // deprecated
    return Crypto.HmacSHA256(password, 'kuncirahasia').toString(Crypto.enc.Hex); // newVersion
};

module.exports = encrypt;
