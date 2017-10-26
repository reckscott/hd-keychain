var HDKeychain = require('../index.js');

var keychain = new HDKeychain();

var key = keychain.deriveKey('bitcoin', 0, false, 0, {testnet: true});
console.log(key);