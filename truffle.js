var HDWalletProvider = require('truffle-hdwallet-provider');

var infuraApiKey = '2LJD4du7gc8srZT8gDXi';

var mnemonic = 'rifle ostrich lab perfect curious split donate farm park brief rival thumb';

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
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/' + infuraApiKey);
      },
      network_id: 3,
      gas: 4612388
    }
  }
};
