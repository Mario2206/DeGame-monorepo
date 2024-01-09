// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract BadgeManager {
    mapping(address => mapping(uint256 => uint256)) public badges;
    mapping(address => uint256[]) public owners;

    event BadgeMinted(address indexed to, uint256 indexed badgeId);
    event BadgeAssigned(address indexed to, uint256 indexed badgeId);

    function mint(address to, uint256 badgeId) public {
        badges[to][badgeId] = 1;
        emit BadgeMinted(to, badgeId);
    }

    function assign(address to, uint256 badgeId) public {
        if(owners[to].length == 0) {
            owners[to] = new uint256[](1);
            owners[to][0] = badgeId;
        } else {
            owners[to].push(badgeId);
        }
        emit BadgeAssigned(to, badgeId);
    }

    function getBadges(address to) public view returns (uint256[] memory) {
        return  owners[to];
    }
}