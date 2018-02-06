import Web3 from 'web3'

// TODO: Take this from env vars
const PORT = 7545

export default () => {
  const { web3 } = window

  // FIXME: Using MetaMask's web3 makes it hard to work with events
  if (typeof web3 !== 'undefined') {
    return new Web3(web3.currentProvider)
  }

  const provider = new Web3.providers.HttpProvider(`http://127.0.0.1:${PORT}`)
  return new Web3(provider)
}
