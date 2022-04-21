const Controller = artifacts.require('TPNLController');
const Factory = artifacts.require('Factory');
const BasicModule = artifacts.require('BasicModule');
const DEXModule = artifacts.require('DexIssueModuleV1');
const UniSwapOracle = artifacts.require('UniSwapOracle');
const Valuer = artifacts.require('Valuer');
const consts = require('../consts');

module.exports = async function (deployer, n, accounts) {
  const acc = accounts[0];
  const controller = await Controller.deployed();


  const dexModule = await deployer.deploy(
    DEXModule,
    controller.address,
    consts.UNISWAP.weth.test
  );
  // address[] memory _factories,
  // address[] memory _modules,
  // address[] memory _resources,
  // uint256[] memory _resourceIds
  // IntegrationRegistry will always be resource ID 0 in the system
  // uint256 constant internal INTEGRATION_REGISTRY_RESOURCE_ID = 0;
  // // PriceOracle will always be resource ID 1 in the system
  // uint256 constant internal PRICE_ORACLE_RESOURCE_ID = 1;
  // // SetValuer resource will always be resource ID 2 in the system
  // uint256 constant internal SET_VALUER_RESOURCE_ID = 2;

  await controller.addModule(dexModule.address);
};
