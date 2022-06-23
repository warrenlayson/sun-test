import { writable } from 'svelte/store';
import { v4 as uuid4 } from 'uuid';

export interface Article {
	id: string;
	title: string;
	content: string;
	createdAt: string;
}

export const data = writable<Article[]>([
	{
		id: '1',
		title: 'Article 1',
		content: 'Article content 1',
		createdAt: '2020-01-14'
	},
	{
		id: '2',
		title: 'Article 2',
		content: 'Article content 2 ',
		createdAt: '2020-01-14'
	}
]);

const getPaddedMonth = (month: number) => (month < 0 ? `0${month}` : month);

export const addArticle = (title: string, content: string) => {
	const today = new Date();
	const currentDay = today.getDay();
	const currentMonth = today.getMonth() + 1;
	const currentYear = today.getFullYear();

	data.update((d) => {
		return [
			...d,
			{
				id: uuid4(),
				title,
				content,
				createdAt: `${currentDay}/${getPaddedMonth(currentMonth)}/${currentYear}`
			}
		];
	});
};

export const updateArticle = (id: string, title: string, content: string) => {
	data.update((a) => {
		// find article, assuming it can't be null
		const article = a.find((b) => b.id === id)!;

		// find article index
		const index = a.findIndex((a) => a.id === id);

		// copy over article
		let articles = [...a];

		articles[index] = {
			...articles[index],
			title,
			content
		};

		return [...articles];
	});
};

export const deleteArticle = (id: string) => {
	data.update((a) => a.filter((b) => b.id !== id));
};
