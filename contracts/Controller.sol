// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;

import "@setprotocol/set-protocol-v2/contracts/protocol/Controller.sol";

contract TPNLController is Controller {
  constructor(address _feeRecipient) public Controller(_feeRecipient) {}
}