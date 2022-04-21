const Controller = artifacts.require('TPNLController');
const IntReg = artifacts.require('IntegrationRegistry');
const TradeModule = artifacts.require('TradeModule');
const UniAdapter = artifacts.require('UniswapV2ExchangeAdapterV2');
const consts = require('../consts');


module.exports = async function (deployer, n, accounts) {
  const controller = await Controller.deployed();
  const intReg = await deployer.deploy(IntReg, controller.address);
  const tradeModule = await deployer.deploy(TradeModule, controller.address);
  const adapter = await deployer.deploy(UniAdapter, consts.UNISWAP.address.router);

  await controller.addResource(intReg.address, 0);
  await controller.addModule(tradeModule.address);

   /**
     * GOVERNANCE FUNCTION: Add a new integration to the registry
     *
     * @param  _module       The address of the module associated with the integration
     * @param  _name         Human readable string identifying the integration
     * @param  _adapter      Address of the adapter contract to add
     */
  await intReg.addIntegration(tradeModule.address, "uniswap", adapter.address);
}