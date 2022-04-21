const Factory = artifacts.require("Factory");
const BasicModule = artifacts.require("BasicIssuanceModule");
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
  const basicModule = await BasicModule.deployed();
  const navModule = await NAVModule.deployed();

  try {
    const setToken = await factory.create( 
      [
        consts.TEST_TOKENS.AVAX,
        consts.TEST_TOKENS.JOE,
        consts.TEST_TOKENS.XAVA,
        consts.TEST_TOKENS.QI,
        consts.TEST_TOKENS.PTP,
        consts.TEST_TOKENS.PNG,
      ],
      [
        toB(6, 17),
        toB(35, 18),
        toB(8, 18),
        toB(517, 18),
        toB(3, 18),
        toB(77,18),
      ],
      [basicModule.address, navModule.address],
      acc,
      "Avalaunch index",
      "AVI"
    );
    const addr = setToken.logs[0].args._setToken;
    console.log(addr);
    callback();
  } catch (e) {
    callback(e);
  }

  

};
