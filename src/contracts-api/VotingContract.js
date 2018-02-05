import { toAsciiFromByte32, getWeb3 } from 'utils'
import VotingContractMeta from '../../build/contracts/Voting.json'
import contract from 'truffle-contract'


let instance = null

export default class VotingContract {
  constructor() {
    if (!instance) {
      instance = this
      this.web3 = getWeb3()
      this.contract = contract(VotingContractMeta)
      this.contract.setProvider(this.web3.currentProvider)
    }

    return instance
  }

  async getVotes() {
    const contractInstance = await this.contract.deployed()
    return contractInstance.votes.call();
  }

  async proposeCandidate(candidateName) {
    const { eth: { accounts: [ account ] } } = this.web3
    const contractInstance = await this.contract.deployed()
    return contractInstance.postulateCandidate(candidateName, { from: account });
  }

  async castVote(candidateName) {
    const contractInstance = await this.contract.deployed()
    return contractInstance.voteForCandidate.call(candidateName);
  }

  async getAllCandidates() {
    const contractInstance = await this.contract.deployed()
    const candidateList = (await contractInstance.listCandidates.call())
      .map(candidate => toAsciiFromByte32(candidate))

    return Promise.all(candidateList.map(
        (candidate) => contractInstance.getCandidateVotes.call(candidate)
      ))
      .then(allVotes => allVotes.map((votes, index) => ({
        name: candidateList[index],
        votes: Number(votes.toString()),
      })))
  }

  async getCandidateVotes(candidate) {
    const contractInstance = await this.contract.deployed()
    const result = await contractInstance.getCandidateVotes.call(candidate.name)
    return {
      candidate: candidate.name,
      votes: Number(result.toString())
    }
  }

  async vote(candidate) {}
}
