<script lang="ts">
	// Svelte Imports
	import { createEventDispatcher } from 'svelte';

	// Models
	import type { IHeaderNavLink } from '$models/interfaces/iheader-nav-link.interface';

	// Exports
	/**
	 * @type {IHeaderNavLink}
	 */
	export let navLinks!: IHeaderNavLink[];
	export let logoImage = '';
	export let title = '';
	export let useTitleAndLogo = false;
	//export let useThemeModeButton = true;

	// Local Properties
	let dark = false;

	// Local Methods
	const dispatch = createEventDispatcher();

	const toggleTheme = (): void => {
		dark = !dark;
		dispatch('toggleTheme', {
			dark: dark,
		});
	};
</script>

<style>
	.black-gradient{
		background-image: linear-gradient(to bottom, #000 0%, rgba(0,0,0,0) 100%);
	}
</style>


<div class="black-gradient">
	<nav
	class="flex flex-wrap items-center justify-between w-full  p-8 mx-auto my-0   sticky-nav  bg-opacity-60"
>

	<!-- <a href="#skip" class="skip-nav"> Skip to content </a> -->
	{#if useTitleAndLogo}
		<div class="w-auto p-1 text-gray-900 dark:text-gray-100 font-bold">
			<a
				sveltekit:prefetch
				href="/"
				class="flex flex-row h-12 justify-center items-center"
				aria-label="{title}"
			>
				<img
					src="{logoImage}"
					alt="{title}"
					width="3rem"
					height="3rem"
					class="w-12 h-12 mr-2 rounded-full"
				/>
				{title}
			</a>
		</div>
	{/if}
	<div>
		<a href="#">
			<span>
				343 S 2nd Ave,
			</span>
			<span>
				Mount Vernon, NY 10550
			</span>
		</a>
	</div>
	<div class="flex flex-row items-center">
		{#each navLinks as navLink, index (navLink.path)}
			<a
				sveltekit:prefetch
				href="{navLink.path}"
				class="p-2 text-white"
			>
				{navLink.label}
			</a>
		{/each}
	</div>
</nav>
</div>

