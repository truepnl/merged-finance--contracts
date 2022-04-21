const Faucet = artifacts.require('Faucet');
const consts = require('../consts');

module.exports = async function (deployer, n, accounts) {
  const faucet = await deployer.deploy(Faucet);
};
