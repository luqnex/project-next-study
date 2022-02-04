import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import styles from "./styles.module.scss";

interface Props {
	itens: [
		{
			img: string;
			name: string;
			price: string;
			id: number;
		}
	];
}

export default function SSR({ itens }: Props) {
	return (
		<>
			<Head>
				<title>Server Side Rendering</title>
			</Head>
			<Header />
			<Main>
				<h1>Server Side Rendering</h1>
				<p>Está pagina utiliza SSR</p>
				<div className={styles.containerCard}>
					{itens?.map((item) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch("http://localhost:3000/api/itens");
	const itens = await res.json();

	return {
		props: {
			itens,
		},
	};
};
