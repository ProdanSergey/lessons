import styles from './author.module.css';

type Props = {
	name: string;
	email?: string;
	date: string;
	avatar?: string;
}

export const Author = ({ name, email, date, avatar }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.description}>
				<p className={styles.name}>by <span>{name}</span></p>
				<p className={styles.email}>
					<a href={`mailto:${email}`}>{email}</a>
				</p>
				<p className={styles.date}>created: <time>{date}</time></p>
			</div>
			<div className={styles.avatar}>
				<img src={avatar} alt={`${name}'s Avatar`} />
			</div>
		</div>
	)
};