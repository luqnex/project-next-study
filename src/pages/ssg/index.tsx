import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import styles from "./styles.module.scss";

interface Itens {
	itens: [
		{
			img: string;
			name: string;
			price: string;
			id: number;
		}
	];
}

export default function SSG({ itens }: Itens) {
	return (
		<>
			<Head>
				<title>Static Site Generation</title>
			</Head>
			<Header />
			<Main>
				<h1>Static Site Generation</h1>
				<p>Está página utiliza SSG</p>
				<div className={styles.containerCard}>
					{itens?.sort().map((item) => (
						<Card key={item.id}>
							<Image
								src={item.img}
								width={300}
								height={250}
								alt="Imagem"
								objectFit="cover"
							/>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</Card>
					))}
				</div>
			</Main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("http://localhost:3000/api/itens");
	const itens = await res.json();

	return {
		props: {
			itens,
		},
		revalidate: 60 * 60 * 24, // 1 minute
	};
};
