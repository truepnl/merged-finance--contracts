const USDT = artifacts.require("USDT");
const PNL = artifacts.require("PNL");
const DAO = artifacts.require("DAO");
const AVAX = artifacts.require("AVAX");
const JOE = artifacts.require("JOE");
const XAVA = artifacts.require("XAVA");
const QI = artifacts.require("QI");
const PTP = artifacts.require("PTP");
const PNG = artifacts.require("PNG");
const ETH = artifacts.require("ETH");
const BNB = artifacts.require("BNB");
const Near = artifacts.require("Near");
const Chromia = artifacts.require("Chromia");
const MATIC = artifacts.require("MATIC");

const tokenSupply = BigInt(100000000 * 10 ** 18).toString();
module.exports = async function(deployer, n, accounts) {

  await deployer.deploy(USDT, tokenSupply);
  await deployer.deploy(PNL, tokenSupply);
  await deployer.deploy(DAO, tokenSupply);
  await deployer.deploy(AVAX, tokenSupply);
  await deployer.deploy(JOE, tokenSupply);
  await deployer.deploy(XAVA, tokenSupply);
  await deployer.deploy(QI, tokenSupply);
  await deployer.deploy(PTP, tokenSupply);
  await deployer.deploy(PNG, tokenSupply);
  await deployer.deploy(ETH, tokenSupply);
  await deployer.deploy(BNB, tokenSupply);
  await deployer.deploy(Near, tokenSupply);
  await deployer.deploy(Chromia, tokenSupply);
  await deployer.deploy(MATIC, tokenSupply);

};
