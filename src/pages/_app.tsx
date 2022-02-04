import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { useEffect } from "react";

import { ThemeProvider } from "@os-design/theming";
import { initNProgress, NProgressGlobalStyles } from "@os-team/next-nprogress";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		initNProgress(router);
	}, [router]);

	return (
		<ThemeProvider>
			<NProgressGlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
