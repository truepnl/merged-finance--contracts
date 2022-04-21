// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;

import "@setprotocol/set-protocol-v2/contracts/protocol/modules/BasicIssuanceModule.sol";
import "@setprotocol/set-protocol-v2/contracts/interfaces/IController.sol";

contract BasicModule is BasicIssuanceModule {
  constructor(address _controller) public BasicIssuanceModule(IController(_controller)){}
}