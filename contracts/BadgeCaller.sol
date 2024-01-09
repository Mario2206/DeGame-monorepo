// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./BadgeManager.sol";

abstract contract BadgeCaller {
    address public badgeManager;

    function setBadgeManager(address _badgeManager) public {
        badgeManager = _badgeManager;
    }
  
   function assignBadge(uint256 badgeId) internal {
        require(badgeManager != address(0), "BadgeManager not set");
        BadgeManager(badgeManager).assign(badgeId);
    }
}