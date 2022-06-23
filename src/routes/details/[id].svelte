<script>
	import { page } from '$app/stores';
	import { data } from '../../stores/data-store';

	const id = $page.params.id;

	console.log(id);

	let article = $data.find((a) => a.id === id);
</script>

{#if article}
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
	</article>
{/if}
