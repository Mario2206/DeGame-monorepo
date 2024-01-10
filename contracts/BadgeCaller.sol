// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/access/Ownable.sol";

import "./BadgeManager.sol";

abstract contract BadgeCaller is Ownable {
    address public badgeManager;

    constructor() Ownable(msg.sender) {}

    function setBadgeManager(address _badgeManager) public {
        badgeManager = _badgeManager;
    }
  
   function assignBadge(address to, uint256 badgeId) internal {
        require(badgeManager != address(0), "BadgeManager not set");
        return BadgeManager(badgeManager).assign(to, badgeId);
    }
}