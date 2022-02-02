import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props {
	children: ReactNode;
}

export function Main({ children }: Props) {
	return (
		<main className={styles.mainContent}>
			<div className={styles.container}>{children}</div>
		</main>
	);
}
