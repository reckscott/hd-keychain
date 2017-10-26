module.exports = {
  bitcoin: {
    version: {
      public: 0x00,
      private: 0x80
    },
    bip32: {
      version: {
        public: 0x0488b21e,
        private: 0x0488ade4 
      }
    },
    bip44: {
      type: 0
    }
  },
  bitcoin_testnet: {
    version: {
      public: 0x6f,
      private: 0xef
    },
    bip32: {
      version: {
        public: 0x043587cf,
        private: 0x04358394
      }
    },
    bip44: {
      type: 1
    }
  }
}