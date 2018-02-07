# voting-dapp

This app is a sample React application to explain how to communicate React with a Smart Contract.


## Setup and initialization

First order of business, download and install dependencies and pre-requisites:

```bash
$ npm install -g truffle
$ git clone https://github.com/danazkari/voting-dapp
$ cd voting-dapp
$ npm install
```

Also, don't forget to download [Ganache], which you'll need to setup a local blockchain for dev
purposes. Each time you launch Ganache, it starts the blockchain from scratch, so you'll have to
deploy your contracts each time as well.

Once you have [Ganache] up and running, compile and deploy the smart contracts onto the blockchain:

```bash
$ truffle compile
$ truffle migrate
```

Once you have that ready, all you need to do now is run the front-end:

```bash
$ npm start
```

Also, you can use [MetaMask] to get a visual representation of your local blockchain accounts,
although I have to point out, it has a few bugs that need to be addressed, so If I were you,
for now I'd stick to consuming the provider directly from Ganache.

## Writing tests

There are some tests that I wrote on `test/voting.js`, this usually is the best way to develop your
smart contract code and make sure it's doing what it's supposed to. Debugging a smart contract is
currently very hard, so this is a very good way of keeping track of what your contracts are doing.

```bash
$ npm run test
```

## Deploying to Ropsten

So to do this, the easiest way to get started is to download and setup [MetaMask], create a password
like so:

![MetaMask Password Screenshot][metamask-password]

MetaMask will give you a 12 word mnemonic which you'll need to save:

![MetaMask mnemonic][metamask-mnemonic]

Copy them somewhere safe, seriously, they're important.

Now you can go to [Infura.io] to get your API key by signing up.

Put those 12 words in your `truffle.js` file:

```javascript
var HDWalletProvider = require('truffle-hdwallet-provider');

var infuraApiKey = 'YOUR GENERATED INFURA API KEY';

var mnemonic = 'YOUR 12 WORDS MNEMONIC';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    // Grab this info from Ganache
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
```

Then, on your MetaMask UI, select the `Ropsten` network:

![Selecting Ropsten Network][metamask-ropsten-network]

Last thing, go to the [MetaMask faucet] and request some ether for your account, you'll
need it to deploy your contracts:

![MetaMask faucet][metamask-faucet]

And that's it! Now, let's deploy to Ropsten:

```bash
$ truffle compile
$ truffle migrate --network ropsten
```

Done. You're now officially on Ropsten, now you only need your MetaMask pointing at Ropsten Network and you're good to go!

## What's next?

Well, there's an [awesome Solidity guide] on YouTube, also there's a [best practices guide] for Smart Contracts
you should read on.

Should you have any questions, I invite you to open up issues.

[Ganache]: https://truffleframework.com/ganache/
[MetaMask]: https://metamask.io
[awesome Solidity guide]: https://www.youtube.com/watch?v=v_hU0jPtLto&list=PL16WqdAj66SCOdL6XIFbke-XQg2GW_Avg
[best practices guide]: https://consensys.github.io/smart-contract-best-practices/
[Infura.io]: https://infura.io/
[MetaMask faucet]: https://faucet.metamask.io/

[metamask-password]: http://res.cloudinary.com/danielpradogl/image/upload/c_scale,w_300/v1518022946/Screen_Shot_2018-02-07_at_11.01.58_AM_amv8i4.png
[metamask-mnemonic]: http://res.cloudinary.com/danielpradogl/image/upload/c_scale,w_300/v1518023493/Screen_Shot_2018-02-07_at_11.05.50_AM_qwfvpv.png
[metamask-ropsten-network]: http://res.cloudinary.com/danielpradogl/image/upload/c_scale,w_300/v1518025740/Screen_Shot_2018-02-07_at_11.48.36_AM_fkjjho.png
[metamask-faucet]: http://res.cloudinary.com/danielpradogl/image/upload/c_scale,h_214/v1518029297/faucet_i59i1w.png
