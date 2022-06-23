<script lang="ts">
	import { data } from '../../stores/data-store';

	export let id: string;

	const article = $data.find((a) => a.id === id);
</script>

{#if article}
	<div class="flex justify-between items-center">
		<h2>
			{article.title}
		</h2>

		<caption>
			{article.createdAt}
		</caption>
	</div>

	<p>
		{article.content}
	</p>
{/if}
