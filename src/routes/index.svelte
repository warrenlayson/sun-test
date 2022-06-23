<script lang="ts">
	import { data, deleteArticle, updateArticle, type Article } from '../stores/data-store';

	let selectedId: string | null = null;

	let title = '';
	let content = '';
	let selectedArticle: Article | undefined;

	const handleDelete = (id: string) => {
		if (confirm(`Are you sure you want to delete Article ${id}`)) {
			deleteArticle(id);
		}
	};

	const handleSubmit = () => {
		if (selectedArticle) {
			updateArticle(selectedArticle.id, title, content);
		}
	};
</script>

<a class="py-2 px-4 bg-green-500 hover:bg-green-200 text-white rounded " href="/create"
	>Create New Article</a
>

{#each $data as article (article.id)}
	<a href={`/details/${article.id}`}>
		<article class="max-w-lg mx-auto">
			<header class="flex items-center justify-between">
				<h2 class="text-lg font-bold">
					{article.title}
				</h2>

				<caption>
					{article.createdAt}
				</caption>
			</header>

			<p>
				{article.content}
			</p>

			<div class="flex items-center justify-between my-2">
				<a
					href={`/edit/${article.id}`}
					class="px-4 py-2 bg-blue-500 hover:bg-blue-200 font-medium rounded text-white"
				>
					Edit
				</a>
				<!-- <button
					on:click={() => {
						selectedArticle = $data.find((a) => a.id === article.id);

						title = selectedArticle?.title ?? '';
						content = selectedArticle?.content ?? '';
					}}
					class="px-4 py-2 bg-blue-500 hover:bg-blue-200 font-medium rounded text-white"
					>Edit</button
				> -->
				<button
					class="px-4 py-2 bg-red-500 hover:bg-red-200 font-medium rounded text-white"
					type="button"
					on:click={() => handleDelete(article.id)}
				>
					Delete
				</button>
			</div>
		</article>
	</a>
{/each}

{#if selectedArticle}
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
{/if}
