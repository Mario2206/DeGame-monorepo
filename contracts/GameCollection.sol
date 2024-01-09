// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./BadgeCaller.sol";

/// @custom:security-contact <security email address>
contract GameCollection is ERC1155, IERC2981, Ownable, BadgeCaller {
    using Strings for uint256;

    uint256 public idCounter;
    mapping(uint256 => uint256) public prices;
    mapping(uint256 => bool) public games;
    mapping(uint256 => uint16) royalties;

    string public metadataURI;

    event RegisterGame(uint256 indexed gameId, uint256 price, uint16 royaltyPercent);
    event Minted(uint256 indexed gameId, address indexed to);


    constructor() ERC1155("") BadgeCaller() {
        metadataURI = "https://scarlet-late-turtle-674.mypinata.cloud/ipfs/QmRq9JkTQjn9jzVm8un3UQwUqMo6U18hZQKxLJszVnufuQ/";
    }
    
    // Register the game in the collection
    function registerGame (uint256 price, uint16 royaltyPercent) public onlyOwner returns (uint256) {
      idCounter++;
      games[idCounter] = true;
      prices[idCounter] = price;
      royalties[idCounter] = royaltyPercent;
      emit RegisterGame(idCounter, price, royaltyPercent);
      return idCounter;
    }

    // Mint the game
    function mint(uint256 gameId) public payable  {
      require(games[gameId] , "Invalid game id");
      uint256 gamePrice = prices[gameId];
      require(msg.value >= gamePrice, "Invalid price");
      _mint(msg.sender, gameId, 1, "");
      emit Minted(gameId, msg.sender);
      // Assign the badge to the user
      assignBadge(msg.sender, 1);
    }

    // Withdraw the funds
    function withdraw() public onlyOwner {
      (bool sent,) = payable(msg.sender).call{value: getBalance()}("");
      require(sent, "Failed to withdraw");
    }

    // Get the balance of the contract
    function getBalance() public view returns(uint) {
      return address(this).balance;
    }

    // Batch mint the game
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
    {
        _mintBatch(to, ids, amounts, data);
    }

    // EIP2981 standard royalties return.
    function royaltyInfo(uint256 gameId, uint256 _salePrice) external view override
        returns (address receiver, uint256 royaltyAmount)
    {
        return (owner(), (_salePrice * royalties[gameId] * 100) / 10000);
    }

    function setMetadataURI(string memory _metadataURI) public onlyOwner {
        metadataURI = _metadataURI;
    }

    function uri(uint256 _tokenid) override public view returns (string memory) {
        return string(
            abi.encodePacked(
                metadataURI,
                Strings.toString(_tokenid),".json"
            )
        );
    }

    /** @dev Contract-level metadata for OpenSea. */

    function contractURI() public pure returns (string memory) {
        string memory json = '{"name": "DeGames collection","description":"Own your games. Play and sell as you wish with no limit."}';
        return string.concat("data:application/json;utf8,", json);
    }
}