var coins = require('./coins.js');
var crypto = require('crypto');
var hash = require('block-hash');
var bip39 = require('bip39');
var CoinKey = require('coinkey');
var HDKey = require('hdkey');

function HDKeychain(seed) {
  if (!seed) {
    var entropy = crypto.randomBytes(32);
    seed = hash.sha256.hash(entropy);
  }
  this.seed = seed;
};

HDKeychain.fromSeedHex = function(seedHex) {
  return new HDKeychain(new Buffer(seedHex, 'hex'));
};

HDKeychain.prototype.toSeedHex = function() {
  return this.seed.toString('hex');
};

HDKeychain.fromSeedMnemonic = function(seedMnemonic) {
  return new HDKeychain(bip39.mnemonicToEntropy(seedMnemonic));
};

HDKeychain.prototype.toSeedMnemonic = function() {
  return bip39.entropyToMnemonic(this.seed);
};

HDKeychain.prototype.deriveKey = function(coin, account, change, index, options) {
  options = options || {};
  options.testnet = options.testnet || false;

  coin = coins[coin + (options.testnet ? '_testnet' : '')];
  
  var root = HDKey.fromMasterSeed(this.seed, coin.bip32.version);
  var key = root.derive(`m/44'/${coin.bip44.type}'/${account}'/${change ? 1 : 0}/${index}`);
  var ck = new CoinKey(key.privateKey, coin.version);

  return {
    address: ck.publicAddress,
    privateKey: ck.privateWif
  }
};

module.exports = HDKeychain;