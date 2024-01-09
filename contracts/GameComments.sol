// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/// @custom:security-contact <security email address>
contract GameComments is ERC1155, IERC2981, Ownable {
    using Strings for uint256;

    struct Comment {
        uint256 gameId;
        address author;
        string content;
        uint256 timestamp;
    }

    mapping(uint256 => Comment) public comments;

    event CommentAdded(
        uint256 gameId,
        address indexed author,
        uint256 indexed commentId
    );

    uint256 public commentCount;

    function addComment(string memory _content, uint256 _gameId) public {
        require(bytes(_content).length > 0, "Comment can't be empty.");

        comments[commentCount] = Comment(
            msg.sender,
            _content,
            block.timestamp,
            _gameId
        );
        emit CommentAdded(msg.sender, commentCount, _gameId);

        commentCount++;
    }

    function getComment(
        uint256 _commentId
    ) public view returns (address, string memory, uint256, uint256) {
        require(_commentId < commentCount, "Comment doesn't exist.");

        Comment storage comment = comments[_commentId];
        return (
            comment.gameId,
            comment.author,
            comment.content,
            comment.timestamp
        );
    }

    function deleteComment(uint256 _commentId) public {
        require(_commentId < commentCount, "Comment doesn't exist.");
        require(
            comments[_commentId].author == msg.sender,
            "You are not the owner of this comment."
        );

        delete comments[_commentId];
    }
}
