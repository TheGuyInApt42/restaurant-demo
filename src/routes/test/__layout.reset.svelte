<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => ({
		props: {
			path: page.path,
		},
	});
</script>

<script lang="ts">
	// Start: Local Imports

	// Start: External Imports
	import '../../styles/tailwind.css';

	// End: External Imports

	// Core services

	// Components
	import Header from '$ui/components/header/Header.svelte';
	import Footer from '$ui/components/footer/Footer.svelte';
	import RouteTransition from '$ui/components/route-transition/RouteTransition.svelte';
	import Slider from '$lib/shared/ui/components/slider/Slider.svelte';

	// Models
	import type { IHeaderNavLink } from '$models/interfaces/iheader-nav-link.interface';
	// End: Local Imports

	// Start: Local component properties
	export let path = '';

	/**
	 * @type {IHeaderNavLink}
	 */
	const navLinks: IHeaderNavLink[] = [
		{
			path: '/',
			label: 'Home',
		},
		{
			path: '/projects',
			label: 'Projects',
		},
		{
			path: '/settings',
			label: 'Settings',
		},
		{
			path: '/users',
			label: 'Users',
		},
	];

	// End: Local component properties

	// Start: Local component methods

	const toggleThemeMode = (event: CustomEvent<{ dark: boolean }>): void => {
		const htmlTag = document.getElementsByTagName('html').item(0);
		if (htmlTag) {
			htmlTag.className = event.detail.dark ? 'dark' : 'light';
		}
	};

	// End: Local component methods
</script>

<div class="text-white">
	<!-- Start: Header Navigation -->
	<!---->
	<Slider />

	<!-- End: Header Navigation -->
	<main id="skip" class="flex flex-col">
		<!-- Start: Defaull layout slot -->
		<RouteTransition referesh="{path}">
			<slot />
		</RouteTransition>
		<!-- End: Defaull layout slot -->
		<!-- Start: Footer -->
		<Footer />
		<!-- End: Footer -->
	</main>
</div>
