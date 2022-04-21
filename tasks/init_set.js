const SetToken = artifacts.require("SetTokenPNL");
const Controller = artifacts.require("TPNLController");
const Factory = artifacts.require("Factory");
const BasicModule = artifacts.require("BasicModule");
const NAVModule = artifacts.require("NAVModule");

const consts = require('../consts');

const toBig = (amount) => {
  return BigInt(amount) * BigInt(10 ** 18);
}
const testFeeAcc = "0xD8c916428E953108BccAbEA0ae33919407130862";

module.exports = async function(callback) {
  const controller = await Controller.deployed();
  const setToken = await SetToken.deployed();

  try {
    await controller.addSet(setToken.address);
    callback();
  } catch (e) {
    callback(e);
  }

  

};
