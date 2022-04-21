const NAVModule = artifacts.require("NavIssueModuleV1");

const consts = require('../consts');

const toBig = (amount) => {
  return BigInt(amount) * BigInt(10 ** 18);
}
const testFeeAcc = "0xD8c916428E953108BccAbEA0ae33919407130862";
// const setToken = "0xcfc6Aca3B1bF8A07f05CC25951B07Bc688285736"; 
//const setToken = "0xc9849b14F8F826a39964Bcc2eA6f482C4a78a153";
// const setToken = "0xdb197117868cdF563D8BA8C5f9206D8080ef77b4";
// const setToken = "0x6DF58e3B98d8fbc94b25e531ab15BD2AA8B4E0d6";
const setToken = "0xE3B46901E84fB11Eb83fefe94c82249427ecC8c5";
module.exports = async function(callback) {
  // const acc = accounts[0];
  const navModule = await NAVModule.deployed();


  // ===== ===== ====== == NAV Issue
   /**
     * SET MANAGER ONLY. Initializes this module to the SetToken with hooks, allowed reserve assets,
     * fees and issuance premium. Only callable by the SetToken's manager. Hook addresses are optional.
     * Address(0) means that no hook will be called.
     *
     * @param _setToken                     Instance of the SetToken to issue
     * @param _navIssuanceSettings          NAVIssuanceSettings struct defining parameters
     */
    // function initialize(
    //   ISetToken _setToken,
    //   NAVIssuanceSettings memory _navIssuanceSettings
    // )

  //   struct NAVIssuanceSettings {
  //     INAVIssuanceHook managerIssuanceHook;          // Issuance hook configurations
  //     INAVIssuanceHook managerRedemptionHook;        // Redemption hook configurations
  //     ISetValuer setValuer;                          // Optional custom set valuer. If address(0) is provided, fetch the default one from the controller
  //     address[] reserveAssets;                       // Allowed reserve assets - Must have a price enabled with the price oracle
  //     address feeRecipient;                          // Manager fee recipient
  //     uint256[2] managerFees;                        // Manager fees. 0 index is issue and 1 index is redeem fee (0.01% = 1e14, 1% = 1e16)
  //     uint256 maxManagerFee;                         // Maximum fee manager is allowed to set for issue and redeem
  //     uint256 premiumPercentage;                     // Premium percentage (0.01% = 1e14, 1% = 1e16). This premium is a buffer around oracle
  //                                                    // prices paid by user to the SetToken, which prevents arbitrage and oracle front running
  //     uint256 maxPremiumPercentage;                  // Maximum premium percentage manager is allowed to set (configured by manager)
  //     uint256 minSetTokenSupply;                     // Minimum SetToken supply required for issuance and redemption
  //                                                    // to prevent dramatic inflationary changes to the SetToken's position multiplier
  // }
  const navSettings = [
    consts.NULL_ADDRESS,
    consts.NULL_ADDRESS,
    consts.NULL_ADDRESS,
    [consts.TEST_TOKENS.USDT],
    testFeeAcc,
    [BigInt(1e14), BigInt(1e14)],
    BigInt(80e16),
    BigInt(1e14),
    BigInt(80e16),
    1
  ];
  try {
    //await setTokenC.addModule(navModule.address);
    await navModule.initialize(setToken,navSettings);
    callback();
  } catch(e) {
    callback(e);
  }

};
