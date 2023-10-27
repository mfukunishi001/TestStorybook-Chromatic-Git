<script setup lang="ts">
const drawer = ref();
</script>

<template>
	<v-app>
		<v-system-bar color="secondary">
			System Bar
		</v-system-bar>

		<v-navigation-drawer permanent v-model="drawer">
			Navigation Drawer
			<v-list density="compact" nav>
				<v-list-item>
					<NuxtLink to="/">Home</NuxtLink>
				</v-list-item>
				<v-list-item>
					<NuxtLink to="/vuetify3layout">Vuetify3 Layout</NuxtLink>
				</v-list-item>
				<v-list-item>
					<NuxtLink to="/vuetify3sample">vuetify3 Sample</NuxtLink>
				</v-list-item>
				<v-list-item>
					<NuxtLink to="http://localhost:3000/_tailwind/" target="_blank">Tailwind Viewer</NuxtLink>
				</v-list-item>
				<v-list-item>
					<NuxtLink to="/sls">販売管理 Sample</NuxtLink>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="primary">
			<template v-slot:prepend>
				<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
				</v-app-bar-nav-icon>
			</template>
			<v-app-bar-title>Application Bar ＜[≡]押下でNavigation Drawerの開閉可能＞</v-app-bar-title>
			<template v-slot:append>
				<v-btn>Sign-In</v-btn>
				<v-btn>
					<v-icon icon="mdi-home"></v-icon>
				</v-btn>
			</template>
		</v-app-bar>

		<v-main>
			<v-container>
				Main Contents
			</v-container>
		</v-main>

		<v-bottom-navigation>
			Button Navigation
		</v-bottom-navigation>

		<v-footer app color="primary">
			Footer
			<v-btn color="primary" icon="mdi-home"></v-btn>
			<v-btn color="primary" icon="mdi-file"></v-btn>
			<v-btn color="primary" icon="mdi-google"></v-btn>
		</v-footer>
	</v-app>
</template>
