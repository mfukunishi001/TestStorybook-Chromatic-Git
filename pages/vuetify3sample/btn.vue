<script setup lang="ts">
const message = ref("");
function clickButton(msg: string): void {
	message.value = msg;
};

const flag = ref(false);
function load(): void {
	flag.value = true;
};
function cancel(): void {
	flag.value = false;
};
</script>

<template>
	<v-main>
		<v-container>
			<div>基本</div>
			<v-btn @click="clickButton('submit')">Submit</v-btn>
			<v-btn @click="clickButton('cancel')">Cancel</v-btn>
			{{ message }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>スタイル（variant）、色、アイコン</div>
			<div class="d-flex justify-space-between ma-2 pa-2">
				<v-btn color="primary">default</v-btn>
				<v-btn color="primary" variant="outlined">アウトライン</v-btn>
				<v-btn color="primary" variant="text">テキスト</v-btn>
				<v-btn color="primary" variant="flat">flat</v-btn>
				<v-btn color="primary" icon="mdi-home"></v-btn>
			</div>
			<div class="d-flex justify-space-between bg-black ma-2 pa-2">
				<v-btn>default</v-btn>
				<v-btn variant="outlined">アウトライン</v-btn>
				<v-btn variant="text">テキスト</v-btn>
				<v-btn variant="flat">flat</v-btn>
				<v-btn icon="mdi-home"></v-btn>
			</div>
			<div class="d-flex justify-space-between bg-black ma-2 pa-2">
				<v-btn color="black">default</v-btn>
				<v-btn color="black" variant="outlined">アウトライン</v-btn>
				<v-btn color="black" variant="text">テキスト</v-btn>
				<v-btn color="black" variant="flat">flat</v-btn>
				<v-btn color="black" icon="mdi-home"></v-btn>
			</div>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>ロード中、無効化</div>
			<v-btn @click="load" :loading="flag" class="ma-2">Load</v-btn>
			<v-btn @click="cancel" :disabled="!flag" class="ma-2">Cancel</v-btn>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>別のページに飛ぶボタン</div>
			<v-btn class="ma-2"><a href="https://next.vuetifyjs.com/en/components/buttons/" target="_blank">Vuetify3 Button</a></v-btn>
			<v-btn class="ma-2" href="https://next.vuetifyjs.com/en/components/buttons/" target="_blank">Vuetify3 Button</v-btn>
			<v-btn class="ma-2" to="/vuetify3sample">/top</v-btn>
		</v-container>
	</v-main>
</template>
