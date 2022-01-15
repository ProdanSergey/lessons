import mock from './MOCK_DATA.json';

export type Comment = {
	id: number;
	author: string;
	avatar: string;
	createdAt: string;
	body: string;
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const getComments = (): Promise<Comment[]> => {
	return new Promise(resolve => {
		setTimeout(() => {
			const count = getRandomIntInclusive(0, 3);

			resolve(count ? mock.slice(0, count) : []);
		}, 500);
	})
}

const addComment = (body: string): Promise<Comment> => {
	return new Promise(resolve => {
		setTimeout(() => {
			const index = getRandomIntInclusive(0, 9);

			resolve({
				...mock[index],
				id: new Date().valueOf(),
				body
			});
		}, 500);
	});
};

export {
	getComments,
	addComment
}