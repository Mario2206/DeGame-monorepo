// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

// TODO: Implement soul bound token
contract BadgeManager is ERC1155, Ownable {
    uint256 public idCounter;
    mapping(uint256 => bool) public badges;

    string public metadataURI;
    mapping(address => bool) public allowedAddresses;

    event BadgeCreated(uint256 indexed badgeId);
    event BadgeMinted(uint256 indexed badgeId, address indexed to);
    event BadgeAssigned(address indexed to, uint256 indexed badgeId);

    constructor() ERC1155("") Ownable(msg.sender) {
        metadataURI = "";
    }

    // Register the badge in the collection
    function registerBadge() public onlyOwner returns (uint256) {
        idCounter++;
        badges[idCounter] = true;
        emit BadgeCreated(idCounter);
        return idCounter;
    }

    // Mint and assign the badge to an address
    function assign(address to, uint256 badgeId) public payable {
        require(badges[badgeId], "Invalid badge id");
        // Only the allowed contracts can mint
        require(
            allowedAddresses[msg.sender],
            "The address isn't allowed to mint"
        );

        // Only one badge per address
        if (balanceOf(to, badgeId) == 0) {
            _mint(msg.sender, badgeId, 1, "");
            emit BadgeMinted(badgeId, msg.sender);
        }
    }

    function setAllowedContract(
        address _contract,
        bool _allowed
    ) public onlyOwner {
        allowedAddresses[_contract] = _allowed;
    }

    function setMetadataURI(string memory _metadataURI) public onlyOwner {
        metadataURI = _metadataURI;
    }

    function uri(
        uint256 _tokenid
    ) public view override returns (string memory) {
        return
            string(
                abi.encodePacked(
                    metadataURI,
                    Strings.toString(_tokenid),
                    ".json"
                )
            );
    }
}
