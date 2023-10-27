<script setup>
useHead({
	titleTemplate: (title) => {
		return title ? `default layout - ${title}` : 'default layout';
	},
});
</script>

<template>
	<div style="border: 1px dotted blue;">
		<div style="text-align: right;">layouts/default.vue</div>
		<Navbar />
		<slot></slot>
	</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
