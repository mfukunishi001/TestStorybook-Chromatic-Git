<script setup lang="ts">
const drawer = ref();
</script>

<template>
	<v-app-bar color="primary">
		<template v-slot:prepend>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
			</v-app-bar-nav-icon>
		</template>
		<v-app-bar-title>Application</v-app-bar-title>
		<template v-slot:append>
			<v-btn to="/">
				<v-icon icon="mdi-home"></v-icon>
			</v-btn>
		</template>
	</v-app-bar>
</template>
