import { Link, Navigate, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

import { Posts } from './components/posts';
import { HomeTemplate } from './templates/home';
import { NotFoundTemplate } from './templates/not-found';
import { PostTemplate } from './templates/post';

export const App = () => {
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.navigation}>
					<Link className={styles.logo} to="/">Lorem Ipsum Blog</Link>
				</nav>
			</header>
			<main className={styles.container}>
				<aside className={styles.sidebar}>
					<Posts/>
				</aside>
				<section className={styles.content}>
					<Routes>
						<Route path="/" element={<HomeTemplate/>}/>
						<Route path="/posts/:id" element={<PostTemplate/>}/>
						<Route path="/404" element={<NotFoundTemplate/>}/>
						<Route
							path="*"
							element={
								<Navigate to="/404" replace/>
							}
						/>
					</Routes>
				</section>
			</main>
		</>
	)
};