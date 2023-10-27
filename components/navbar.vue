<template>
	<div style="border: 1px dotted yellow;">
		<nav>
			<div style="text-align: right;">components/navbar.vue</div>
			<div>NuxtLinkを使用
				<NuxtLink to="/">Home</NuxtLink>
				/
				<NuxtLink to="/vuetify3layout">Vuetify3 Layout</NuxtLink>
				/
				<NuxtLink to="/vuetify3sample">vuetify3 Sample</NuxtLink>
				/
				<NuxtLink to="http://localhost:3000/_tailwind/" target="_blank">Tailwind Viewer</NuxtLink>
				/
				<NuxtLink to="/sls">販売管理 Sample</NuxtLink>
			</div>
		</nav>
	</div>
</template>
