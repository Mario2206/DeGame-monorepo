// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @custom:security-contact <security email address>
contract GameComments {
    struct Comment {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
    }

    uint256 public idCounter;

    mapping(uint256 => Comment) public comments;

    event CommentAdded(address indexed author, uint256 indexed commentId);

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
}
