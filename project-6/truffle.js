const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "<infura key>";
// const fs = require('fs');
const mnemonic = "<metamask seed>";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 6000000,
      gasPrice: 10000000000
    },
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};