<script context='module'>
	export async function preload({ params, query }) {
	    try {
            const res = await this.fetch(`blog/${params.slug}.json`);

            if (!res.ok) {
                console.error(`error fetching post data for ${params.slug} with status ${res.status}`);
                return {post: null};
            }

            const post = await res.json();
            return {post};
		} catch (e) {
	        console.error(`unknown error fetching post data for ${params.slug}`, e);
	        return {post: null};
		}
	}
</script>

<script>
	export let post;
	import {print_date} from '../../utils/date';
</script>

<style>
    article {
        padding: 4rem;
        margin: 0 auto;
        max-width: 1080px;
    }
    article :global(section + section) {
        border-top: 1px solid red;
        padding-top: 1rem;
        margin-top: 2rem;
    }
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article>
    <header>
        <h2>{post.title}</h2>
        <time>{print_date(new Date(post.date))}</time>
    </header>
	{@html post.html}
</article>
