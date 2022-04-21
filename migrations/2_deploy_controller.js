const Controller = artifacts.require("TPNLController");

module.exports = function(deployer, n, accounts) {
  deployer.deploy(Controller, accounts[0]);
};
