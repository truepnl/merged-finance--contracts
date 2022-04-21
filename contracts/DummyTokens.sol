pragma solidity 0.6.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20 {
    constructor(uint256 supply) public ERC20("USDT test", "USDT") {
        _mint(msg.sender, supply);
    }
}

contract PNL is ERC20 {
    constructor(uint256 supply) public ERC20("PNL test", "PNL") {
        _mint(msg.sender, supply);
    }
}

contract DAO is ERC20 {
    constructor(uint256 supply) public ERC20("DAO test", "DAO") {
        _mint(msg.sender, supply);
    }
}

contract AVAX is ERC20 {
    constructor(uint256 supply) public ERC20("AVAX test", "AVAX") {
        _mint(msg.sender, supply);
    }
}

contract JOE is ERC20 {
    constructor(uint256 supply) public ERC20("JOE test", "JOE") {
        _mint(msg.sender, supply);
    }
}

contract XAVA is ERC20 {
    constructor(uint256 supply) public ERC20("XAVA test", "XAVA") {
        _mint(msg.sender, supply);
    }
}

contract QI is ERC20 {
    constructor(uint256 supply) public ERC20("QI test", "QI") {
        _mint(msg.sender, supply);
    }
}

contract PTP is ERC20 {
    constructor(uint256 supply) public ERC20("PTP test", "PTP") {
        _mint(msg.sender, supply);
    }
}

contract PNG is ERC20 {
    constructor(uint256 supply) public ERC20("PNG test", "PNG") {
        _mint(msg.sender, supply);
    }
}

contract ETH is ERC20 {
    constructor(uint256 supply) public ERC20("ETH test", "ETH") {
        _mint(msg.sender, supply);
    }
}

contract BNB is ERC20 {
    constructor(uint256 supply) public ERC20("BNB test", "BNB") {
        _mint(msg.sender, supply);
    }
}

contract Near is ERC20 {
    constructor(uint256 supply) public ERC20("Near test", "Near") {
        _mint(msg.sender, supply);
    }
}

contract Chromia is ERC20 {
    constructor(uint256 supply) public ERC20("Chromia test", "Chromia") {
        _mint(msg.sender, supply);
    }
}

contract MATIC is ERC20 {
    constructor(uint256 supply) public ERC20("MATIC test", "MATIC") {
        _mint(msg.sender, supply);
    }
}

