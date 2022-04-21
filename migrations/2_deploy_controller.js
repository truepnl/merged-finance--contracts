const Controller = artifacts.require("Controller");

module.exports = function(deployer, n, accounts) {
  deployer.deploy(Controller, accounts[0]);
};
