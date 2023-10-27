<script setup lang="ts">
const filesArray: File[] = [];
const files1 = ref(filesArray);
const data1 = ref("");
function readFile1(): void {
	console.log(files1.value.length);
	if (files1.value.length <= 0) {
		data1.value = "";
	} else {
		const file: File = files1.value[0];
		const fileReader = new FileReader();
		fileReader.onload = () => {
			console.log(typeof fileReader.result);
			if (typeof fileReader.result === "string") {
				console.log(file.type);
				if (file.type === "application/json") {
					data1.value = JSON.parse(fileReader.result);
				} else {
					data1.value = fileReader.result;
				}
			}
		}
		fileReader.readAsText(file);	// onloadが呼び出される
	}
};

const files2 = ref(filesArray);
const data2 = ref("");
function readFile2(): void {
	console.log(files2.value.length);
	if (files2.value.length <= 0) {
		data2.value = "";
	} else {
		const file: File = files2.value[0];
		const fileReader = new FileReader();
		fileReader.onload = () => {
			console.log(typeof fileReader.result);
			if (typeof fileReader.result === "string") {
				console.log(file.type);
				if (file.type.startsWith("image")) {
					data2.value = fileReader.result;
				} else {
					data2.value = "";
				}
			}
		}
		fileReader.readAsDataURL(file);	// onloadが呼び出される
	}
};
</script>

<template>
	<v-main>
		<v-container>
			<div>JSON(プレーンテキスト)ファイルを読み込んで表示する</div>
			<v-file-input prepend-icon="mdi-code-json" show-size label="JSON又は、プレーンテキストファイルを選択" v-model="files1" accept="application/json,text/plain" @update:modelValue="readFile1"></v-file-input>
			<pre>{{ data1 }}</pre>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>画像を読み込んで表示させる</div>
			<v-file-input prepend-icon="mdi-image" show-size label="画像ファイルを選択" v-model="files2" accept="image/*" @update:modelValue="readFile2"></v-file-input>
			<img :src="data2">
		</v-container>

		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
