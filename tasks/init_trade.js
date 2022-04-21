const SetToken = artifacts.require("SetTokenPNL");
const TradeModule = artifacts.require("TradeModule");
const DexModule = artifacts.require("DexIssueModuleV1");

const consts = require('../consts');

const toBig = (amount) => {
  return BigInt(amount) * BigInt(10 ** 18);
}
// const setToken = "0xcfc6Aca3B1bF8A07f05CC25951B07Bc688285736"; 
//const setToken = "0xc9849b14F8F826a39964Bcc2eA6f482C4a78a153";
const setToken = "0xdb197117868cdF563D8BA8C5f9206D8080ef77b4";
// const setToken = "0x6DF58e3B98d8fbc94b25e531ab15BD2AA8B4E0d6";
module.exports = async function(callback) {
  const tradeModule = await TradeModule.deployed();
  const setTokenC = await SetToken.at(setToken);
  const dexModule = await DexModule.deployed();

  try {
    await setTokenC.addModule(tradeModule.address);
    await tradeModule.initialize(setToken);
    // await dexModule.editTradeModule(setTokenC.address, tradeModule.address);
    console.log("All good");
    callback();
  } catch(e) {
    callback(e);
  }

};
