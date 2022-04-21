const SetToken = artifacts.require("SetTokenPNL");
const SfModule = artifacts.require("StreamingFeeModule");

const consts = require('../consts');

const toBig = (amount) => {
  return BigInt(amount) * BigInt(10 ** 18);
}
const feeRec = "0x4856EF087CfCF7a067D28C9Ce2ac8B747508B0BD";

// const setToken = "0xcfc6Aca3B1bF8A07f05CC25951B07Bc688285736"; 
//const setToken = "0xc9849b14F8F826a39964Bcc2eA6f482C4a78a153";
const setToken = "0xdb197117868cdF563D8BA8C5f9206D8080ef77b4";
// const setToken = "0x6DF58e3B98d8fbc94b25e531ab15BD2AA8B4E0d6";
module.exports = async function(callback) {
  const sfModule = await SfModule.deployed();
  const setTokenC = await SetToken.at(setToken);
  //   struct FeeState {
  //     address feeRecipient;                   // Address to accrue fees to
  //     uint256 maxStreamingFeePercentage;      // Max streaming fee maanager commits to using (1% = 1e16, 100% = 1e18)
  //     uint256 streamingFeePercentage;         // Percent of Set accruing to manager annually (1% = 1e16, 100% = 1e18)
  //     uint256 lastStreamingFeeTimestamp;      // Timestamp last streaming fee was accrued
  // }

  const sfSettings = [
    feeRec,
    1e17.toString(),
    5e16.toString(),
    1649070279
  ];

  try {
    await setTokenC.addModule(sfModule.address);
    await sfModule.initialize(setToken, sfSettings);
    console.log("All good");
    callback();
  } catch(e) {
    callback(e);
  }

};
