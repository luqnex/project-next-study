import Link from "next/link";

import styles from "./styles.module.scss";

export function Header() {
	return (
		<header className={styles.headerContent}>
			<div>
				<nav>
					<ul>
						<li>
							<Link href="/">CSR</Link>
						</li>
						<li>
							<Link href="/ssr">SSR</Link>
						</li>
						<li>
							<Link href="/ssg">SSG</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
