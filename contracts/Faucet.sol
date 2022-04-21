// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//contracts/token/ERC20/IERC20.sol
contract Faucet is Ownable {
    address[] tokens;
    mapping(address => uint256) amount;
    mapping(address => uint256) users;
    mapping(address => bool) enabled;
    uint256 private constant _TIMELOCK = 1 days;

    function getTokens() public {
      require(users[msg.sender] <= block.timestamp, "You already claim the tokens for today");
      for(uint index=0; index<tokens.length; index++){
        if(enabled[tokens[index]]) {
          IERC20 token = IERC20(tokens[index]);
          require(token.balanceOf(address(this)) >= amount[tokens[index]], "Not enought tokens in the faucet, pls contact the support to add more");
          token.approve(address(this), amount[tokens[index]]);
          token.transferFrom(address(this), msg.sender, amount[tokens[index]]);
        }
      }

      users[msg.sender] = block.timestamp + _TIMELOCK;
    }

    function addToken(address _adr, uint256 _amount) public onlyOwner {
      tokens.push(_adr);
      enabled[_adr] = true;
      amount[_adr] = _amount;
    }

    function disableToken(address _adr) public onlyOwner {
        enabled[_adr] = false;
    }


}
