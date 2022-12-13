require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC } = process.env;
console.log(INFURA_API_KEY, MNEMONIC)
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    goerli: {
      provider: new HDWalletProvider(MNEMONIC, 'https://goerli.infura.io/v3/' + INFURA_API_KEY),
      network_id: '5',
      gas: 4465030
    }
  }
};