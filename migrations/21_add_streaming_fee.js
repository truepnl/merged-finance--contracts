const Controller = artifacts.require('TPNLController');
const SFModule = artifacts.require('StreamingFeeModule');
const consts = require('../consts');

module.exports = async function (deployer, n, accounts) {
  const acc = accounts[0];
  const controller = await Controller.deployed();

  //   struct FeeState {
  //     address feeRecipient;                   // Address to accrue fees to
  //     uint256 maxStreamingFeePercentage;      // Max streaming fee maanager commits to using (1% = 1e16, 100% = 1e18)
  //     uint256 streamingFeePercentage;         // Percent of Set accruing to manager annually (1% = 1e16, 100% = 1e18)
  //     uint256 lastStreamingFeeTimestamp;      // Timestamp last streaming fee was accrued
  // }

  const sfModule = await deployer.deploy(
    SFModule,
    controller.address,
  );

  await controller.addModule(sfModule.address);
};
