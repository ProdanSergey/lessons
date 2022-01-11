import { ReactNode, useState } from 'react';
import { CardDeck, Cards } from "../card"


interface CarsCategoryProps {
	title: string;
	children?: ReactNode;
}

const CarsCategory = ({ title, children }: CarsCategoryProps) => {
	const [visible, setVisibility] = useState(true);
	
	const handleClick = () => {
		setVisibility((prevState) => !prevState);
	}

	return (
		<li>
			<h3>
				<button onClick={handleClick}>{title}</button>
			</h3>
			<div hidden={!visible}>
				{children}
			</div>
		</li>
	)
}

type CarCategory = {
	title: string;
	items: Cards;
}

interface CarsProps {
	categories: CarCategory[];
}

export const Cars = ({ categories }: CarsProps) => {
	return (
		<ul>
			{categories.map(({ title, items }) => (
				<CarsCategory key={title} title={title}>
					<CardDeck cards={items}/>
				</CarsCategory>
			))}
		</ul>
	)
}