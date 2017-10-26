var HDKeychain = require('../index.js');

var keychain = new HDKeychain();

var seedHex = keychain.toSeedHex();
console.log(seedHex);

var seedMnemonic = keychain.toSeedMnemonic();
console.log(seedMnemonic);

keychain = HDKeychain.fromSeedHex(seedHex);
console.log(keychain.toSeedHex());

keychain = HDKeychain.fromSeedMnemonic(seedMnemonic);
console.log(keychain.toSeedMnemonic());
