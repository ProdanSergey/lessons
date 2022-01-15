import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts, Post } from '../../api/posts';
import styles from './posts.module.css';

export const Posts = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const request = async () => {
			try {
				const posts = await getPosts();

				setPosts(posts);
			} catch {}
		}

		request();
	}, []);

	return (
		<ul className={styles.container}>
			{posts.map(({ id, title }) => (
				<li key={id} className={styles.item}>
					<Link to={`/posts/${id}`}>{title}</Link>
				</li>
			))}
		</ul>
	)
};