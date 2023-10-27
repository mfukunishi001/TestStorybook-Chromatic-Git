<script setup lang="ts">
const nav_drawer = ref();	// 未対応
</script>

<template>
	<div>
		<v-app-bar _color="primary">
			<template v-slot:prepend>
				<v-app-bar-nav-icon variant="text" @click.stop="nav_drawer = !nav_drawer"></v-app-bar-nav-icon>
			</template>
			<!-- <v-app-bar-title>販売管理 <small>SGシステム</small></v-app-bar-title> -->
			<template v-slot:append>
				<v-btn to="/" icon="mdi-home"></v-btn>
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-pencil-box-outline"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-cart-variant"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-cash-register"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-calculator-variant-outline"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-handshake-outline"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-office-building-cog-outline"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-account-cog-outline"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-book-cog-outline"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-bell-cog-outline"></v-btn> -->
				<!-- <v-btn class="left-vertical-line-short" icon="mdi-content-save-cog-outline"></v-btn> -->
				<div class="left-vertical-line-short">
					<v-icon class="pl-2" start icon="mdi-account-circle"></v-icon>
					<span>渡邉　真司</span>
				</div>
			</template>
		</v-app-bar>
	</div>
</template>

<style scoped>
.left-vertical-line-short {
	position: relative;
}

.left-vertical-line-short::before {
	content: "";
	display: block;
	height: 1em;
	border-left: 1px solid #999;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
}
</style>
