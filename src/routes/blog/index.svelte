<script context="module">
	export async function preload({ params, query }) {
	    try {
            const response = await this.fetch(`blog.json`);
            if (!response.ok) {
                console.error(`failed fetching blog posts with status ${response.status}`);
                return;
            }
            const posts = await response.json();
            return {posts};
		} catch (e) {
	        console.error(`unknown error when fetching posts`, e);
	        return {posts: []};
		}
	}
</script>

<script>
	export let posts;
    import {print_date} from '../../utils/date';
</script>

<style>
	ul {
		margin: 1em;
		line-height: 1.5;
	}
	h3 {
        display: inline-block;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>
		    <a rel='prefetch' href='blog/{post.slug}'>
		        <h3>{post.title}</h3>
		        <time datetime='{post.date}'>{print_date(new Date(post.date))}</time>
		    </a>
		</li>
	{/each}
</ul>
