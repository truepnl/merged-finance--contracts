// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;

import "@setprotocol/set-protocol-v2/contracts/protocol/SetTokenCreator.sol";
import "@setprotocol/set-protocol-v2/contracts/interfaces/IController.sol";

contract Factory is SetTokenCreator {
    constructor(IController _controller)
        public
        SetTokenCreator(_controller)
    {}
}
