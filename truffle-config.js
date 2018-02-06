var HDWalletProvider = require('truffle-hdwallet-provider');

var infuraApiKey = '2LJD4du7gc8srZT8gDXi';

var mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: '5777'
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/' + infuraApiKey),
      network_id: 3
    }
  }
};
