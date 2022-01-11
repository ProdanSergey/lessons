import './card.css';

interface CardProps {
	title: string;
	text: string;
}

const Card = ({ title, text }: CardProps) => {
	return (
		<article className='card__container'>
			<header className='card__module'>
				{title}
			</header>
			<section className='card__body'>
				{text}
			</section>
		</article>
	)
};

export type Cards = CardProps[];

export interface CardDeckProps {
	cards: Cards
}

export const CardDeck = ({ cards }: CardDeckProps) => {
	return (
		<div className="card__deck">
			{cards.map(({ title, text }) => <Card key={title} title={title} text={text}/>)}
		</div>
	)
};