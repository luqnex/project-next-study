/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

import styles from "./index.module.scss";

interface Item {
	img: string;
	name: string;
	price: string;
	id: number;
}

export default function Home() {
	const [itens, setItens] = useState<Item[]>([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/itens")
			.then((resp) => resp.json())
			.then((data) => setItens(data))
			.catch((err) => console.log(err.message));
	}, []);

	return (
		<>
			<Head>
				<title>Client Side Rendering</title>
			</Head>
			<Header />
			<Main>
				<h1>Client Side Rendering</h1>
				<p>Está página utiliza CSR</p>
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
