import {
  time,
  loadFixture,
} from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('GameComments', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployContracts() {
    const [owner, addr1] = await ethers.getSigners();

    const badgeManagerFactory = await ethers.getContractFactory('BadgeManager');
    const badgeManager = await badgeManagerFactory.deploy();

    await badgeManager.registerBadge();
    await badgeManager.registerBadge();

    const commentsManagerFactory = await ethers.getContractFactory(
      'GameComments'
    );
    const commentsManager = await commentsManagerFactory.deploy();

    await commentsManager.setBadgeManager(badgeManager.target);
    await badgeManager.setAllowedContract(commentsManager.target, true);

    return { owner, commentsManager, badgeManager, addr1 };
  }

  describe('Deployment', function () {
    it('should set an empty metadata uri', async function () {
      const { commentsManager } = await loadFixture(deployContracts);

      expect(await commentsManager.metadataURI()).to.equal('');
    });
  });

  describe('Add Comment', function () {
    it('should add a comment', async function () {
      const { owner, commentsManager, addr1 } = await deployContracts();

      const gameId = 1;
      const content = 'This is a comment.';
      const rating = 5;

      await commentsManager.connect(addr1).addComment(gameId, content, rating);

      const comment = await commentsManager.getComment(1);

      console.log(typeof comment[5]);

      expect(comment[0]).to.equal(1); // Check comment ID
      expect(comment[1]).to.equal(gameId); // Check gameId
      expect(comment[2]).to.equal(rating); // Check rating
      expect(comment[3]).to.equal(addr1.address); // Check author
      expect(comment[4]).to.equal(content); // Check content
      expect(comment[5]).to.be.a('bigint'); // Check timestamp
    });

    it('should not add a comment with empty content', async function () {
      const { commentsManager } = await deployContracts();

      const gameId = 1;
      const content = '';
      const rating = 5;

      await expect(
        commentsManager.addComment(gameId, content, rating)
      ).to.be.revertedWith('Comment content cannot be empty.');
    });

    it('should not allow adding multiple comments for the same gameId by the same author', async function () {
      const { commentsManager, addr1 } = await deployContracts();

      const gameId = 1;
      const content = 'First comment.';
      const rating = 4;

      await commentsManager.addComment(gameId, content, rating);

      const duplicateContent = 'Another comment.';
      const duplicateRating = 3;

      await expect(
        commentsManager.addComment(gameId, duplicateContent, duplicateRating)
      ).to.be.revertedWith('User already has a comment for this gameId.');
    });
  });

  describe('Get Comments', function () {
    it('should retrieve comments', async function () {
      const { commentsManager } = await deployContracts();

      const gameId = 1;
      const content = 'This is a comment.';
      const rating = 5;

      await commentsManager.addComment(gameId, content, rating);
      const comments = await commentsManager.getAllComments();

      expect(comments.length).to.equal(1);
      expect(comments[0].gameId).to.equal(gameId);
      expect(comments[0].content).to.equal(content);
    });

    it('should retrieve comments by gameId', async function () {
      const { commentsManager, addr1 } = await deployContracts();

      const gameId = 1;
      const content = 'First comment.';
      const rating = 4;

      await commentsManager.addComment(gameId, content, rating);

      const comments = await commentsManager.getAllGamesComments(gameId);

      expect(comments.length).to.equal(1);
      expect(comments[0].gameId).to.equal(gameId);
      expect(comments[0].content).to.equal(content);
    });

    it('should retrieve comments by author', async function () {
      const { commentsManager, addr1 } = await deployContracts();

      const gameId = 1;
      const content = 'First comment.';
      const rating = 4;

      await commentsManager.connect(addr1).addComment(gameId, content, rating);

      const comments = await commentsManager
        .connect(addr1)
        .getAllOwnedComments();

      expect(comments.length).to.equal(1);
      expect(comments[0].author).to.equal(addr1.address);
    });
  });
});
