import mock from './MOCK_DATA.json';

export type Post = {
	id: number;
	title: string;
	author: string;
	email: string;
	avatar: string;
	body: string;
	createdAt: string;
}

const getPosts = (): Promise<Post[]> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(mock)
		}, 500);
	})
}

const getPost = async (id: number): Promise<Post> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const post = mock.find(p => p.id === id);

			if (post) {
				resolve(post)
			}

			reject('Not found');
		}, 500);
	})
}

export {
	getPosts,
	getPost
}