const ETH = artifacts.require("ETH");
const BNB = artifacts.require("BNB");
const Near = artifacts.require("Near");
const Chromia = artifacts.require("Chromia");
const MATIC = artifacts.require("MATIC");

const tokenSupply = BigInt(100000000 * 10 ** 18).toString();
module.exports = async function(deployer, n, accounts) {

  await deployer.deploy(ETH, tokenSupply);
  await deployer.deploy(BNB, tokenSupply);
  await deployer.deploy(Near, tokenSupply);
  await deployer.deploy(Chromia, tokenSupply);
  await deployer.deploy(MATIC, tokenSupply);

};
