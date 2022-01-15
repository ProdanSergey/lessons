import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getPost, Post } from "../../api/posts";
import { Author } from "../../components/author";
import { Comments } from "../../components/comments";
import { Loader } from "../../components/loader";

import styles from './post.module.css';

type Params = {
	id: string;
}

export const PostTemplate = () => {
	const [post, setPost] = useState<Post>();
	const [loading, setLoading] = useState(true);

	const { id } = useParams<Params>();

	useEffect(() => {		
		if (id) {
			const request = async () => {
				setLoading(true);

				try {
					const post = await getPost(Number(id));

					setPost(post);
				} finally {
					setLoading(false);
				}
			};
	
			request();
		} else {
			setLoading(false);
		}
	}, [id])

	return (
		loading 
			? <Loader />
			: (
				post ? (
					<article id={id}>
						<header className={styles.header}>
							<h1 className={styles.title}>{post.title}</h1>
							<Author
								name={post.author}
								email={post.email}
								date={post.createdAt}
								avatar={post.avatar}
							/>
						</header>
						<section>
							<div className={styles.body}>
								{post.body}
							</div>
						</section>
						<Comments/>
					</article>
				) : <Navigate to="/404" replace/>
			)
	);
}