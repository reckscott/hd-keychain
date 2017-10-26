HD Keychain
=====

[![npm](https://img.shields.io/npm/v/hd-keychain.svg)](https://npmjs.com/package/hd-keychain) 
[![NPM Downloads](https://img.shields.io/npm/dm/hd-keychain.svg)](https://www.npmjs.com/package/hd-keychain) 
[![Try on RunKit](https://badge.runkitcdn.com/hd-keychain.svg)](https://npm.runkit.com/hd-keychain)

Manage hierarchical deterministic keychain for bitcoin and altcoins.


## Installation

    npm i --save hd-keychain


## Usage

### Create a new keychain with random seed

```js
var keychain = new HDKeychain();
```
### Create a keychain from hex string seed

```js
var keychain = HDKeychain.fromSeedHex(seedHex);
```

### Create a keychain from mnemonic string seed

```js
var keychain = HDKeychain.fromSeedMnemonic(seedMnemonic);
```

### Export seed as hex string

```js
var seedHex = keychain.toSeedHex();
console.log(seedHex);
```

### Export seed as mnemonic string

```js
var seedMnemonic = keychain.toSeedMnemonic();
console.log(seedMnemonic);
```

### Derive a key for bitcoin testnet

```js
var key = keychain.deriveKey(
  'bitcoin',  // coin type
  0,          // account
  false,      // change
  0,          // index
  {testnet: true}
);
console.log(key.address);
console.log(key.privateKey);
```


License
-------

MIT