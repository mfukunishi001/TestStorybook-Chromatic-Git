<script setup>
useHead({
	titleTemplate: (title) => {
		return title ? `販売管理 Sample - ${title}` : '販売管理  Sample';
	},
});
</script>

<template>
	<div>
		<v-app style="background-color: rgb(237,241,247);">
			<SlsNavigationDrawer />
			<SlsAppBar />
			<slot></slot>
			<!-- <SlsFooter /> -->
		</v-app>
	</div>
</template>
