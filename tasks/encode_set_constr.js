const SetToken = artifacts.require("SetTokenPNL");
const Controller = artifacts.require("TPNLController");
const Factory = artifacts.require("Factory");
const BasicModule = artifacts.require("BasicModule");
const NAVModule = artifacts.require("NavIssueModuleV1");
const consts = require('../consts');

const toBig = (amount) => {
  return BigInt(amount) * BigInt(10 ** 18);
}
const testFeeAcc = "0xD8c916428E953108BccAbEA0ae33919407130862";
// const contName = "test_set_1";
module.exports = async function(callback) {
  let accounts = await web3.eth.getAccounts();
  const coder = web3.eth.abi;
  console.log(coder);
  const acc = accounts[0];
  const factory = await Factory.deployed();
  const controller = await Controller.deployed();
  const basicModule = await BasicModule.deployed();
  const navModule = await NAVModule.deployed();

  try {
    const params = [
      'address[]',
      'int256[]',
      'address[]',
      'address',
      'address',
      'string',
      'string'
    ];
    const data = [[consts.TEST_TOKENS.PNL,consts.TEST_TOKENS.DAO],
    [
      toBig(5),
      toBig(1),
    ],
    [basicModule.address, navModule.address],
    controller.address,
    acc,
    "PNLSetV1",
    "SPNL"];

    console.log(coder.encodeParameters(params, data));
    callback();
  } catch (e) {
    callback(e);
  }

  

};
