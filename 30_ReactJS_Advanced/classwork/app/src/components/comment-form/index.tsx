import { ChangeEvent, FormEvent, useState } from "react"
import { addComment, Comment } from "../../api/comments";

import styles from './comment-form.module.css';

type Props = {
	onSubmit: (newComment: Comment) => void;
}

interface CommentFormElements extends HTMLFormControlsCollection {
	comment: HTMLTextAreaElement
}

interface CommentFormElement extends HTMLFormElement {
  readonly elements: CommentFormElements,
	readonly comment: HTMLTextAreaElement,
}

export const CommentForm = ({ onSubmit }: Props) => {
	const [value, setValue] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(target.value);
	}

	const handleSubmit = async (event: FormEvent<CommentFormElement>) => {
		event.preventDefault();

		const form = event.target as CommentFormElement
		const body = form.comment.value;

		try {
			setLoading(true);
			const todo = await addComment(body);

			onSubmit && onSubmit(todo);
			setValue('');
		} finally {
			setLoading(false);
		}
	}

	const countClassName = value.length >= 50 ? styles.valid : styles.invalid;

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<label className={styles.label} htmlFor="comment">
				<p className={`${styles.count} ${countClassName}`}>{value.length}</p>
				<textarea className={styles.input} id="comment" name="comment" onChange={handleChange} value={value}/>
			</label>
			<button className={styles.button} type="submit" disabled={loading || value.length < 50}>Send</button>
		</form>
	)
}