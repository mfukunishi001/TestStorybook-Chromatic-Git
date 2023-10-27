<script setup>
useHead({
	titleTemplate: (title) => {
		return title ? `Vuetify3 Sample - ${title}` : 'Vuetify3 Sample';
	},
});
</script>

<template>
	<div>
		<v-app>
			<Vuetify3sampleSystemBar />
			<Vuetify3sampleNavigationDrawer />
			<Vuetify3sampleAppBar />
			<slot></slot>
			<Vuetify3sampleBottomNavigation />
			<Vuetify3sampleFooter />
		</v-app>
	</div>
</template>
