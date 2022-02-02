import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props {
	children: ReactNode;
}

export function Card({ children }: Props) {
	return <div className={styles.card}>{children}</div>;
}
