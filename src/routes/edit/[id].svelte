<script lang="ts">
	import { page } from '$app/stores';
	import { data, updateArticle } from '../../stores/data-store';

	let id = $page.params.id;

	const article = $data.find((a) => a.id === id);

	let title = article?.title ?? '';
	let content = article?.content ?? '';

	const handleSubmit = () => {
		updateArticle(id, title, content);
		alert('Article updated');
	};
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="max-w-lg mx-auto p-4 shadow rounded flex flex-col "
>
	<h2 class="text-2xl my-2 font-bold">Edit Article</h2>
	<div class="flex">
		<label for="title">Article Title</label>
		<input type="text" bind:value={title} id="title" />
	</div>

	<div>
		<label for="title">Article Content</label>
		<textarea bind:value={content} id="content" />
	</div>

	<button
		type="submit"
		class="py-2 px-4 font-medium bg-blue-500 text-white hover:bg-blue-200 rounded  mt-4"
		>Update</button
	>
</form>
