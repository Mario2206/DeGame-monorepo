// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/// @custom:security-contact <security email address>
contract GameComments is ERC1155, Ownable {
    struct Comment {
        uint256 id;
        uint256 gameId;
        uint256 rating;
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

    function addComment(
        uint256 _gameId,
        string memory _content,
        uint256 _rating
    ) public returns (uint256) {
        require(bytes(_content).length > 0, "Comment content cannot be empty.");

        // Vérifier si l'utilisateur possède déjà un commentaire avec le même gameId
        for (uint256 i = 1; i <= idCounter; i++) {
            if (
                comments[i].author == msg.sender &&
                comments[i].gameId == _gameId
            ) {
                revert("User already has a comment for this gameId.");
            }
        }

        idCounter++;
        comments[idCounter] = Comment(
            idCounter,
            _gameId,
            _rating,
            msg.sender,
            _content,
            block.timestamp
        );
        emit CommentAdded(msg.sender, idCounter);

        return idCounter;
    }

    function getComment(
        uint256 _commentId
    )
        public
        view
        returns (uint256, uint256, uint256, address, string memory, uint256)
    {
        require(_commentId < idCounter, "This comment does not exist.");

        Comment storage comment = comments[_commentId];
        return (
            comment.id,
            comment.gameId,
            comment.rating,
            comment.author,
            comment.content,
            comment.timestamp
        );
    }

    function getAllComments() public view returns (Comment[] memory) {
        Comment[] memory allComments = new Comment[](idCounter);

        for (uint256 i = 1; i <= idCounter; i++) {
            if (comments[i].id != 0) {
                allComments[i - 1] = comments[i];
            }
        }

        return allComments;
    }

    function getAllOwnedComments() public view returns (Comment[] memory) {
        Comment[] memory allComments = getAllComments();
        Comment[] memory ownerComments = new Comment[](allComments.length);
        uint256 count = 0;

        for (uint256 i = 0; i < allComments.length; i++) {
            if (allComments[i].author == msg.sender) {
                ownerComments[count] = allComments[i];
                count++;
            }
        }

        assembly {
            mstore(ownerComments, count)
        }

        return ownerComments;
    }
}
