<script>
	import Nav from '../components/nav.svelte';

	export let segment;
</script>

<style>
	main {
	    background-color: var(--color-background-dark);
	    color: var(--color-text-light);
        grid-area: main;
        height: 100%;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
