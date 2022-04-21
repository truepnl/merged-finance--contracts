//UniswapPairPriceAdapter// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;

import "@setprotocol/set-protocol-v2/contracts/protocol/PriceOracle.sol";
import "@setprotocol/set-protocol-v2/contracts/interfaces/IOracle.sol";
import "@setprotocol/set-protocol-v2/contracts/interfaces/IController.sol";

contract UniSwapOracle is PriceOracle {
    constructor(
        IController _controller,
        address _masterQuoteAsset,
        address[] memory _adapters,
        address[] memory _assetOnes,
        address[] memory _assetTwos,
        IOracle[] memory _oracles
    )
        public PriceOracle(_controller, _masterQuoteAsset, _adapters, _assetOnes, _assetTwos, _oracles)
    {}
}
