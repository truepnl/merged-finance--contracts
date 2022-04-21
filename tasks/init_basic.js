const BasicModule = artifacts.require("BasicIssuanceModule");

const consts = require('../consts');

const toBig = (amount) => {
  return BigInt(amount) * BigInt(10 ** 18);
}
const testFeeAcc = "0xD8c916428E953108BccAbEA0ae33919407130862";
// const setToken = "0xcfc6Aca3B1bF8A07f05CC25951B07Bc688285736";
//const setToken = "0xc9849b14F8F826a39964Bcc2eA6f482C4a78a153";
// const setToken = "0xdb197117868cdF563D8BA8C5f9206D8080ef77b4";
const setToken = "0x6DF58e3B98d8fbc94b25e531ab15BD2AA8B4E0d6";
module.exports = async function(callback) {
  const basicModule = await BasicModule.deployed();
  // const setToken = await SetToken.deployed();

  // == === == === ==== Basic Issue
  /**
  * Initializes this module to the SetToken with issuance-related hooks. Only callable by the SetToken's manager.
  * Hook addresses are optional. Address(0) means that no hook will be called
  *
  * @param _setToken             Instance of the SetToken to issue
  * @param _preIssueHook         Instance of the Manager Contract with the Pre-Issuance Hook function
  */
  //  function initialize(
  //      ISetToken _setToken,
  //      IManagerIssuanceHook _preIssueHook
  //  )

  try {
    await basicModule.initialize(setToken, consts.NULL_ADDRESS);
    callback();
  } catch (e) {
    callback(e);
  }

  

};
