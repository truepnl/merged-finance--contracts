// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;
pragma experimental "ABIEncoderV2";

import "@setprotocol/set-protocol-v2/contracts/protocol/SetToken.sol";
import "@setprotocol/set-protocol-v2/contracts/interfaces/IController.sol";

contract SetTokenPNL is SetToken {
    constructor(
      address[] memory _components,
      int256[] memory _units,
      address[] memory _modules,
      IController _controller,
      address _manager,
      string memory _name,
      string memory _symbol
    )
        public
        SetToken(
          _components,
          _units,
          _modules,
          _controller,
          _manager,
          _name,
          _symbol
        )
    {}
}
