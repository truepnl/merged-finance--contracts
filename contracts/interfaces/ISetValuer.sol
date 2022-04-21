/*
    Copyright 2020 Set Labs Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    SPDX-License-Identifier: Apache License, Version 2.0
*/
pragma solidity 0.6.10;

import { ISetToken } from "@setprotocol/set-protocol-v2/contracts/interfaces/ISetToken.sol";

interface ISetValuer {
    function calculateSetTokenValuation(ISetToken _setToken, address _quoteAsset) external view returns (uint256);
    function calculateComponentsValuation(address[] memory components, uint256[] memory componentQuantities, address masterQuoteAsset) external view returns (uint256[] memory);
}