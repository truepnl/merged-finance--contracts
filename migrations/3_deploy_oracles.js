const UniSwapAdapter = artifacts.require('UniSwapAdapter');
const UniSwapOracle = artifacts.require('UniSwapOracle');
const Valuer = artifacts.require('Valuer');
const Controller = artifacts.require('Controller');
const consts = require('../consts');

const tokenSupply = BigInt(100000000 * 10 ** 18).toString();
module.exports = async function (deployer, n, accounts) {
  const controller = await Controller.deployed();
  // IController _controller,
  //       address _uniswapFactory,
  //       IUniswapV2Pair[] memory _uniswapPools
  console.log(controller.address);
  console.log(consts.UNISWAP.address.test);
  console.log(consts.UNISWAP.pools.test);
  const adapter = await deployer.deploy(
    UniSwapAdapter,
    controller.address,
    consts.UNISWAP.address.test,
    consts.UNISWAP.pools.test
  );
  // IController _controller,
  // address _masterQuoteAsset,
  // address[] memory _adapters,
  // address[] memory _assetOnes,
  // address[] memory _assetTwos,
  // IOracle[] memory _oracles
  const oracle = await deployer.deploy(
    UniSwapOracle,
    controller.address,
    consts.TEST_TOKENS.USDT,
    [adapter.address],
    [],
    [],
    []
  );

  const valuer = await deployer.deploy(Valuer, controller.address);
};
