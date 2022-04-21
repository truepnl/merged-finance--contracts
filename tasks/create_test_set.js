const SetToken = artifacts.require("SetTokenPNL");
const Controller = artifacts.require("TPNLController");
const Factory = artifacts.require("Factory");
const BasicModule = artifacts.require("BasicModule");
const NAVModule = artifacts.require("NavIssueModuleV1");
const consts = require('../consts');

const toBig = (amount) => {
  return BigInt(amount) * BigInt(10 ** 18);
}

const toB = (amount, dec) => {
  return BigInt(amount) * BigInt(10 ** dec);
}
const testFeeAcc = "0xD8c916428E953108BccAbEA0ae33919407130862";
// const contName = "test_set_1";
module.exports = async function(callback) {
  let accounts = await web3.eth.getAccounts();
  const acc = accounts[0];
  const factory = await Factory.deployed();
  const controller = await Controller.deployed();
  const basicModule = await BasicModule.deployed();
  const navModule = await NAVModule.deployed();

  try {
    const setToken = await factory.create( 
      [
        consts.TEST_TOKENS.ETH,
        consts.TEST_TOKENS.BNB,
        consts.TEST_TOKENS.AVAX,
        consts.TEST_TOKENS.Near,
        consts.TEST_TOKENS.Chromia,
        consts.TEST_TOKENS.MATIC,
      ],
      [
        toB(1, 16),
        toB(52, 16),
        toB(16, 16),
        toB(1, 18),
        toB(20, 18),
        toB(58,17),
      ],
      [basicModule.address, navModule.address],
      acc,
      "Blockchain index",
      "BSI"
    );
    const addr = setToken.logs[0].args._setToken;
    console.log(addr);
    callback();
  } catch (e) {
    callback(e);
  }

  

};
