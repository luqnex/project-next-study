import Link from "next/link";

import styles from "./styles.module.scss";

export function Header() {
	return (
		<header className={styles.headerContent}>
			<div>
				<nav>
					<ul>
						<li>
							<Link href="/">Client Side Rendering (CSR)</Link>
						</li>
						<li>
							<Link href="/ssr">Server Side Rendering (SSR)</Link>
						</li>
						<li>
							<Link href="/ssg">Static Site Generation (SSG)</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
