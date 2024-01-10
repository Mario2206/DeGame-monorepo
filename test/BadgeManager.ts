import {
	time,
	loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("BadgeManager", function () {
	// We define a fixture to reuse the same setup in every test.
	// We use loadFixture to run this setup once, snapshot that state,
	// and reset Hardhat Network to that snapshot in every test.

	async function deployBadgeManager() {
		const [owner, addr1] = await ethers.getSigners();

		const badgeManagerFactory = await ethers.getContractFactory("BadgeManager");
		const badgeManager = await badgeManagerFactory.deploy();

		return { owner, badgeManager, addr1 };
	}

	describe("Deployment", function () {
		it("should set an empty metadata uri", async function () {
			const { badgeManager } = await loadFixture(deployBadgeManager);

			expect(await badgeManager.metadataURI()).to.equal("");
		});
	});

	describe("RegisterBadge", function () {
		it("should register a badge", async function () {
			const { badgeManager } = await loadFixture(deployBadgeManager);
			expect(await badgeManager.idCounter()).to.equal(0);

			expect(await badgeManager.registerBadge())
				.to.emit(badgeManager, "BadgeCreated")
				.withArgs(1);
			expect(await badgeManager.idCounter()).to.equal(1);
			expect(await badgeManager.badges(1)).to.equal(true);
		});
	});

	describe("SetAllowedAddress", function () {
		it("should set an allowed address", async function () {
			const { badgeManager, addr1 } = await loadFixture(deployBadgeManager);
			expect(await badgeManager.allowedAddresses(addr1.address)).to.equal(
				false
			);

			expect(await badgeManager.setAllowedContract(addr1.address, true));
			expect(await badgeManager.allowedAddresses(addr1.address)).to.equal(true);
		});
	});

	describe("Assign", function () {
		it("shouldn't assign if the badge doesn't exist", async function () {
			const { badgeManager, addr1 } = await loadFixture(deployBadgeManager);
			await expect(badgeManager.assign(addr1.address, 1)).to.be.revertedWith(
				"Invalid badge id"
			);
		});

		it("shouldn't assign if the sender is not allowed but the badge exists", async function () {
			const { badgeManager, addr1 } = await loadFixture(deployBadgeManager);
			await badgeManager.registerBadge();

			await expect(
				badgeManager.connect(addr1).assign(addr1.address, 1)
			).to.be.revertedWith("The address isn't allowed to mint");
		});

		it("should assign if the sender is allowed and the badge exists", async function () {
			const { badgeManager, addr1 } = await loadFixture(deployBadgeManager);
			await badgeManager.registerBadge();
			await badgeManager.setAllowedContract(addr1.address, true);

			// The user doesn't have badges
			expect(await badgeManager.connect(addr1).getMyBadges()).to.deep.equal([]);

			expect(await badgeManager.connect(addr1).assign(addr1.address, 1))
				.to.emit(badgeManager, "BadgeMinted")
				.withArgs(1, addr1.address);

			// The user has a new badge
			expect(await badgeManager.connect(addr1).getMyBadges()).to.deep.equal([
				1,
			]);
		});
	});

	describe("MetadataUri", function () {
		it("should set metadata uri", async function () {
			const { badgeManager } = await loadFixture(deployBadgeManager);

			await badgeManager.setMetadataURI("https://example.com");

			expect(await badgeManager.metadataURI()).to.equal("https://example.com");
		});

		it("should generate a token metadata uri", async function () {
			const { badgeManager } = await loadFixture(deployBadgeManager);
			await badgeManager.setMetadataURI("https://example.com/");

			expect(await badgeManager.uri(1)).to.equal("https://example.com/1.json");
		});
	});
});
