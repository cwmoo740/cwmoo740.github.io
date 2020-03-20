<script>
	import Nav from '../components/nav.svelte';

	export let segment;
</script>

<style>
	@media screen {
		main {
			background-color: var(--color-background-dark);
			color: var(--color-text-light);
		}
	}
    @media print {
		main {
			background-color: var(--color-background-light);
			color: var(--color-text-dark);
		}
	}
	main {
		grid-area: main;
		height: 100%;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
