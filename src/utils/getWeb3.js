import Web3 from 'web3'

const { REACT_APP_LOCAL_BLOCKCHAIN_PORT: PORT } = process.env

export default () => {
  const { web3 } = window

  if (typeof web3 !== 'undefined') {
    return new Web3(web3.currentProvider)
  }

  const provider = new Web3.providers.HttpProvider(`http://127.0.0.1:${PORT}`)
  return new Web3(provider)
}
