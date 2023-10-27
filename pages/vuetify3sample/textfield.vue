<script setup lang="ts">
const message1 = ref("");

const message2 = ref("");
const inputText2 = ref("");
function pushEnter(): void {
	message2.value = inputText2.value;
	inputText2.value = "";
};
</script>

<template>
	<v-main>
		<v-container>
			<div>基本</div>
			<v-text-field v-model="message1"></v-text-field>
			入力内容：{{ message1 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>入力後に Enter キーを押したら何かする</div>
			<v-form action="#" @submit.prevent="pushEnter">
				<v-text-field v-model="inputText2"></v-text-field>
			</v-form>
			入力内容：{{ message2 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>いろいろなスタイル</div>
			<v-text-field></v-text-field>
			<v-text-field label="デフォルトのスタイル" placeholder="「ここに何か入力しろ」とか書ける"></v-text-field>
			<v-text-field label="下線だけのシンプルスタイル" variant="underlined" placeholder="clearableを付けると、右にXボタンが出るようになる。" clearable></v-text-field>
			<v-text-field label="枠囲みのスタイル" variant="outlined" placeholder="counterを付けると文字数を表示する（あくまで数えるだけ）" counter="20"></v-text-field>
			<v-text-field label="コンパクトサイズ" hide-details="auto" placeholder="詳細表示のスペースがなくなって、縦幅が小さくなる。"></v-text-field>
			<v-text-field label="デフォルト" placeholder="デフォルトだと下に少しスペースがあいている。"></v-text-field>
			<v-sheet width="50%">
				<v-text-field label="サイズ制限" placeholder="幅が指定された親要素に入れて制限するか、v-col などを使う。"></v-text-field>
			</v-sheet>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>色の指定</div>
			<v-container class="d-flex flex-row">
				<v-sheet class="bg-black ma-2" width="50%">
					<v-text-field label="背景が black の場合"></v-text-field>
				</v-sheet>
				<v-sheet class="bg-grey ma-2" width="50%">
					<v-text-field label="背景が gray の場合"></v-text-field>
				</v-sheet>
			</v-container>
			<v-container class="d-flex flex-row">
				<v-sheet class="bg-red ma-2" width="50%">
					<v-text-field label="背景が red の場合"></v-text-field>
				</v-sheet>
				<v-sheet class="bg-blue ma-2" width="50%">
					<v-text-field label="背景が blue の場合"></v-text-field>
				</v-sheet>
			</v-container>
			<v-container class="d-flex flex-row">
				<v-sheet class="bg-red-darken-4 ma-2" width="50%">
					<v-text-field label="背景が red-darken-4 の場合"></v-text-field>
				</v-sheet>
				<v-sheet class="bg-blue-darken-4 ma-2" width="50%">
					<v-text-field label="背景が blue-darken-4 の場合"></v-text-field>
				</v-sheet>
			</v-container>
		</v-container>

		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
