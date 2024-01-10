// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/// @custom:security-contact <security email address>
contract GameComments is ERC1155, Ownable {
    struct Comment {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
    }

    uint256 public idCounter;

    mapping(uint256 => Comment) public comments;

    string public metadataURI;

    event CommentAdded(address indexed author, uint256 indexed commentId);

    constructor() ERC1155("") Ownable(msg.sender) {
        metadataURI = "";
    }

    function addComment(string memory _content) public returns (uint256) {
        require(bytes(_content).length > 0, "Comment content cannot be empty.");
        idCounter++;

        comments[idCounter] = Comment(
            idCounter,
            msg.sender,
            _content,
            block.timestamp
        );
        emit CommentAdded(msg.sender, idCounter);

        return idCounter;
    }

    function getComment(
        uint256 _commentId
    ) public view returns (uint256, address, string memory, uint256) {
        require(_commentId < idCounter, "This comment does not exist.");

        Comment storage comment = comments[_commentId];
        return (comment.id, comment.author, comment.content, comment.timestamp);
    }

    function getAllOwnedCommentsId() public view returns (uint256[] memory) {
        uint256[] memory ownerComments = new uint256[](idCounter);
        uint256 count = 0;

        for (uint256 i = 1; i <= idCounter; i++) {
            if (comments[i].author == msg.sender) {
                ownerComments[count] = comments[i].id;
                count++;
            }
        }

        uint256[] memory result = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = ownerComments[i];
        }

        return result;
    }
}
