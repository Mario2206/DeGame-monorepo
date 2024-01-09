import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.hero}>
					<div className={styles.heroBackground}>
						<div className={styles.heroBackgroundInner}>
							<Image
								src="/hero-gradient.png"
								width={1390}
								height={1390}
								alt="Background gradient from red to blue"
								quality={100}
								className={styles.gradient}
							/>
						</div>
					</div>
					<div className={styles.heroAssetFrame}>
						<Image
							src="/hero-asset.png"
							width={860}
							height={540}
							alt="Hero asset, NFT marketplace"
							quality={100}
							className={styles.heroAsset}
						/>
					</div>
					<div className={styles.heroBodyContainer}>
						<div className={styles.heroBody}>
							<h1 className={styles.heroTitle}>
								<span className={styles.heroTitleGradient}>
									Buy your games.
								</span>
								<br />
								Own your games.
							</h1>
							<p className={styles.heroSubtitle}>
								<Link
									className={styles.link}
									href="https://thirdweb.com"
									target="_blank"
								>
									DeGames
								</Link>{" "}
								revolutionizes gaming by granting players full ownership of
								their games through its innovative platform, empowering gamers
								with unprecedented control and value in the gaming ecosystem.
							</p>

							<div className={styles.heroCtaContainer}>
								<Link className={styles.heroCta} href="/games">
									Get Started
								</Link>
								<Link
									className={styles.secondaryCta}
									href="https://github.com/Mario2206/DeGames"
									target="_blank"
								>
									GitHub
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
