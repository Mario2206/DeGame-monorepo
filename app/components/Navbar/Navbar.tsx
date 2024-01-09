import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
		<div className={styles.navContainer}>
			<nav className={styles.nav}>
				<div className={styles.navLeft}>
					<Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
						<Image
							src="/logo.png"
							width={48}
							height={48}
							alt="NFT marketplace sample logo"
						/>
						<span style={{fontFamily: "monospace"}}>DeGames</span>
					</Link>

					<div className={styles.navMiddle}>
						<Link href="/games" className={styles.link}>
							Games
						</Link>
					</div>
				</div>

				<div className={styles.navRight}>
					<div className={styles.navConnect}>
						<ConnectWallet theme="dark" btnTitle="Connect Wallet" />
					</div>
					{address && (
						<Link className={styles.link} href={`/profile/${address}`}>
							<Image
								className={styles.profileImage}
								src="/user-icon.png"
								width={42}
								height={42}
								alt="Profile"
							/>
						</Link>
					)}
				</div>
			</nav>
		</div>
	);
}
