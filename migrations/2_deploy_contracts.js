var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Voting);
};
