import { ReactComponent as Spinner } from '../../icons/audio.svg';
import styles from './loader.module.css';

export const Loader = () => {
	return (
		<div className={styles.container}>
			<Spinner className={styles.icon} />
		</div>
	)
}

