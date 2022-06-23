<script lang="ts">
	import type { Article } from '../stores/data-store';

	export let article: Article;
</script>

<article class="max-w-lg mx-auto">
	<header class="flex items-center justify-between">
		<h2>
			{article.title}
		</h2>

		<caption>
			{article.createdAt}
		</caption>
	</header>

	<p>
		{article.content}
	</p>

	<slot />
</article>
