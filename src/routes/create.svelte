<script lang="ts">
	import { addArticle } from '../stores/data-store';

	let title = '';
	let content = '';

	const handleSubmit = () => {
		addArticle(title, content);
		alert('Article posted');
	};
</script>

<h1 class="text-4xl text-center my-8">Create Article</h1>

<form on:submit|preventDefault={handleSubmit} class="max-w-lg mx-auto">
	<div class="flex w-full">
		<label for="title">Article Title</label>
		<input type="text" bind:value={title} id="title" />
	</div>

	<div class="flex w-full">
		<label for="title">Article Content</label>
		<textarea bind:value={content} id="content" />
	</div>

	<button
		type="submit"
		class="py-2 px-4 font-medium bg-blue-500 text-white hover:bg-blue-200 w-full my-4">Post</button
	>
</form>
