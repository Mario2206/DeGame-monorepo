import { expect } from "chai";
import { ethers } from "hardhat";
import { GameCollection } from "../typechain-types";


describe("GameCollection", () => {
  async function deployContracts() {
		const [owner, addr1] = await ethers.getSigners();

		const badgeManagerFactory = await ethers.getContractFactory("BadgeManager");
		const badgeManager = await badgeManagerFactory.deploy();

		await badgeManager.registerBadge(); // We need to register the First game badge

		const gameCollectionFactory = await ethers.getContractFactory(
			"GameCollection"
		);
		const gameCollection = await gameCollectionFactory.deploy();

		await gameCollection.setBadgeManager(badgeManager.target);
		await badgeManager.setAllowedContract(gameCollection.target, true);

		return { gameCollection, owner, addr1, badgeManager };
	}

  describe("Deployment", () => {
    it("should set a default metadata uri", async () => {
      const { gameCollection } = await deployContracts();

      expect(await gameCollection.metadataURI()).to.equal(
				"https://scarlet-late-turtle-674.mypinata.cloud/ipfs/QmRq9JkTQjn9jzVm8un3UQwUqMo6U18hZQKxLJszVnufuQ/"
			);
    });
  })

  describe("RegisterGame", () => {
    it ("should register a game", async () => {
      const { gameCollection } = await deployContracts();
      const price = 100
      const percentRoyalty = 20

      expect(await gameCollection.idCounter()).to.equal(0);

      expect(await gameCollection.registerGame(price, percentRoyalty))
				.to.emit(gameCollection, "RegisterGame")
				.withArgs(1);
      expect(await gameCollection.idCounter()).to.equal(1);
      expect(await gameCollection.games(1)).to.equal(true);
    })
  })

  describe("Mint", () => {
    it("shouldn't mint a game if the game doesn't exist", async () => {
      const { gameCollection, addr1 } = await deployContracts();

      await expect(gameCollection.connect(addr1).mint(1)).to.be.revertedWith(
				"Invalid game id"
			);
    });

    it("should mint a game", async () => {
      const { gameCollection, addr1, badgeManager } = await deployContracts();
      const price = 100
      const percentRoyalty = 20

      await gameCollection.registerGame(price, percentRoyalty)

      expect(await gameCollection.balanceOf(addr1.address, 1)).to.equal(0);

      expect(
				await gameCollection
					.connect(addr1)
					.mint(1, { value: ethers.parseEther(price.toString()) })
			)
				.to.emit(gameCollection, "Minted")
				.withArgs(1, addr1.address);

      expect(await gameCollection.balanceOf(addr1.address, 1)).to.equal(1);

      expect(await badgeManager.balanceOf(addr1.address, 1)).to.equal(1);
    });
  })

  describe("SetMetadataURI", () => {
    it("should set a metadata uri", async () => {
      const { gameCollection, addr1 } = await deployContracts();
      const newMetadataURI = "https://google.com"

      expect(await gameCollection.metadataURI()).to.equal(
        "https://scarlet-late-turtle-674.mypinata.cloud/ipfs/QmRq9JkTQjn9jzVm8un3UQwUqMo6U18hZQKxLJszVnufuQ/"
      );

      expect(await gameCollection.setMetadataURI(newMetadataURI))
        .to.emit(gameCollection, "MetadataURISet")
        .withArgs(newMetadataURI);

      expect(await gameCollection.metadataURI()).to.equal(newMetadataURI);
    })
  });

  describe("GetBalance", () => {
    it("should get the balance of the contract", async () => {
      const { gameCollection, addr1 } = await deployContracts();
      const price = 100
      const percentRoyalty = 20

      await gameCollection.registerGame(price, percentRoyalty)

      expect(await gameCollection.getBalance()).to.equal(0);

      await gameCollection
        .connect(addr1)
        .mint(1, { value: ethers.parseEther(price.toString()) });

      expect(await gameCollection.getBalance()).to.equal(
				ethers.parseEther(price.toString())
			);
    })
  })
})