const Crypto = require('crypto-js');

function encrypt(password) {
    // return Crypto.createHmac('sha256', 'kuncirahasia').update(password).digest('hex');
    return Crypto.HmacSHA256(password, 'kuncirahasia');
};

module.exports = encrypt;
