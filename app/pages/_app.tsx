import type { AppProps } from "next/app";
import { ThirdwebProvider, useAddress } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
	getBadgeManagerContract,
	getBadgeMetadata,
} from "../util/contracts/badgeManager";


function setupToastListeners(address?: string) {
	const badgeManager = getBadgeManagerContract();

	badgeManager.contract.on("BadgeMinted", (tokenId, to) => {
		if (to !== address) return;
		const badge = getBadgeMetadata(tokenId);
		toast.success(`Badge ${badge?.name} minted`);
	});

	return () => {
		badgeManager.contract.removeAllListeners("BadgeMinted");
	};
}

function Container() {
	const address = useAddress();

	useEffect(() => {
		const dispose = setupToastListeners(address);

		return () => {
			dispose();
		};
	}, [address]);
	return null
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider  activeChain={NETWORK}>
			<Container />
			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={{ duration: 4000 }}
			/>
			{/* Progress bar when navigating between pages */}
			<NextNProgress
				color="var(--color-tertiary)"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>

			{/* Render the navigation menu above each component */}
			<Navbar />
			{/* Render the actual component (page) */}
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
