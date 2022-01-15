import { useEffect, useState } from "react"
import { getComments, Comment } from "../../api/comments";
import { Author } from "../author";
import { CommentForm } from "../comment-form";
import { Loader } from "../loader";

export const Comments = () => {
	const [comments, setComments] = useState<Comment[]>([]);
	const [loading, setLoading] = useState(true);

	const handleAdd = (newComment: Comment) => {
		setComments(state => [...state, newComment]);
	};

	useEffect(() => {
		const request = async () => {
			try {
				const comments = await getComments();

				setComments(state => [...comments, ...state]);
			} finally {
				setLoading(false);
			}
		};

		request();
	}, []);

	return (
		<>
			{
				loading ? <Loader/> : (
					<section>
						<h2>Comments</h2>
						<ul>
							{comments.map(({ id, author, avatar, createdAt, body }) => (
								<li key={id}>
									<section>
										<header>
											<Author
												name={author}
												date={createdAt}
												avatar={avatar}
											/>
										</header>
										<p>{body}</p>
									</section>
								</li>
							))}
							{comments.length < 1 && (
								<p>No comments yet...</p>
							)}
						</ul>
					</section>	
				)
			}
			<section>
				<h2>Leave a comment</h2>
				<CommentForm onSubmit={handleAdd} />
			</section>
		</>
	)
}