<script setup lang="ts">
const drawer = ref();	// 未対応

// 【参考】Vuetify2でのv-list-groupでのリンク設定方法
// https://reffect.co.jp/vue/vuetify-v-list-group-link/
interface List {
	name: string;
	link: string;
	icon: string;
};
interface Nav_List {
	name: string;
	icon: string;
	active: boolean;
	link: string;
	lists?: List[];
};
const nav_lists = ref<Nav_List[]>([
	{ name: 'Home', icon: 'mdi-home', active: false, link: '/', },
	{ name: 'Vuetify3 Layout', icon: 'mdi-page-layout-body', active: false, link: '/vuetify3layout', },
	{
		name: 'Vuetify3 sample', icon: 'mdi-vuetify', active: false, link: '/vuetify3sample', lists: [
			{ name: 'コンポーネント間の違い', link: '/vuetify3sample/box', icon: 'mdi-text-box-outline', },
			{ name: 'カード', link: '/vuetify3sample/cards', icon: 'mdi-card-text-outline', },
			{ name: 'サイズの指定', link: '/vuetify3sample/size', icon: 'mdi-move-resize', },
			// { name: '', link: '/vuetify3sample/', icon: '', },
		],
	},
	{
		name: '1.Vuetify3 sample', icon: 'mdi-vuetify', active: false, link: '/vuetify3sample', lists: [
			{ name: 'ボタン', link: '/vuetify3sample/btn', icon: 'mdi-button-pointer', },
			{ name: 'テキスト入力', link: '/vuetify3sample/textfield', icon: 'mdi-text-box-edit-outline', },
			{ name: 'ファイル選択', link: '/vuetify3sample/fileinput', icon: 'mdi-file-upload-outline', },
			{ name: 'セレクトボックス', link: '/vuetify3sample/select', icon: 'mdi-view-headline', },
			{ name: 'スライダー', link: '/vuetify3sample/slider', icon: 'mdi-arrow-expand-horizontal', },
			{ name: 'ラジオボタン', link: '/vuetify3sample/radio', icon: 'mdi-radiobox-marked', },
			{ name: 'チェックボックス', link: '/vuetify3sample/checkbox', icon: 'mdi-checkbox-outline', },
			{ name: 'メニュー', link: '/vuetify3sample/menu', icon: 'mdi-dots-vertical', },
			{ name: 'ダイアログ', link: '/vuetify3sample/dialog', icon: 'mdi-message-outline', },
			// { name: '', link: '/vuetify3sample/', icon: '', },
		],
	},
	{
		name: '2.Vuetify3 sample', icon: 'mdi-vuetify', active: false, link: '/vuetify3sample', lists: [
			{ name: 'リスト', link: '/vuetify3sample/list', icon: 'mdi-list-box-outline', },
			{ name: 'テーブル', link: '/vuetify3sample/table', icon: 'mdi-table', },
			{ name: 'ページ切替', link: '/vuetify3sample/page', icon: 'mdi-book-open-page-variant-outline', },
			{ name: 'その他', link: '/vuetify3sample/others', icon: 'mdi-dots-horizontal-circle-outline', },
			// { name: '', link: '/vuetify3sample/', icon: '', },
		],
	},
	{
		name: '3.Vuetify3 sample', icon: 'mdi-vuetify', active: false, link: '/vuetify3sample', lists: [
			// { name: '', link: '/vuetify3sample/', icon: '', },
			],
	},
	{
		name: '参考', icon: 'mdi-web', active: false, link: '',
		lists: [
			{ name: 'レイアウトに関するメモ"', link: 'https://qiita.com/mml/items/7bdffe5eb5044f861cf1', icon: 'mdi-web', },
			{ name: 'Vuetify', link: 'https://vuetifyjs.com/', icon: 'mdi-vuetify', },
			{ name: 'Material Design Icons', link: 'https://pictogrammers.com/library/mdi/', icon: 'mdi-vector-square', },
			{ name: 'Nuxt', link: 'https://nuxt.com/', icon: 'mdi-nuxt', },
		],
	},
	// {
	// 	name: '', icon: '', active: false, link: '',
	// 	lists: [
	// 		{ name: '', link: '', icon: '', },
	// 		{ name: '', link: '', icon: '', },
	// 	],
	// },
]);

// サブメニューが選択したときに、他のサブメニューを閉じる
function menu_close(): void {
	nav_lists.value.forEach((nav_list) => (nav_list.active = false));
};
</script>

<template>
	<v-navigation-drawer v-model="drawer" permanent>
		Navigation Drawer
		<v-divider></v-divider>
		<v-list nav density="compact">
			<template v-for="nav_list in nav_lists">
				<v-list-item v-if="!nav_list.lists" :prepend-icon="nav_list.icon" :title="nav_list.name" :value="nav_list.name" :to="nav_list.link" @click="menu_close">
					<v-tooltip activator="parent" location="top">{{ nav_list.name }}</v-tooltip>
				</v-list-item>
				<v-list-group v-else :value="nav_list.name" v-model="nav_list.active">
					<template v-slot:activator="{ props }">
						<v-list-item v-bind="props" :prepend-icon="nav_list.icon" :title="nav_list.name">
							<v-tooltip activator="parent" location="top">{{ nav_list.name }}</v-tooltip>
						</v-list-item>
					</template>
					<template v-for="list in nav_list.lists">
						<v-list-item v-if="list.link.startsWith('/')" :prepend-icon="list.icon" :title="list.name" :value="list.name" :to="list.link">
							<v-tooltip activator="parent" location="top">{{ list.name }}</v-tooltip>
						</v-list-item>
						<v-list-item v-else :prepend-icon="list.icon" :title="list.name" :value="list.name" :href="list.link" target="_blank">
							<v-tooltip activator="parent" location="top">{{ list.name }}</v-tooltip>
						</v-list-item>
					</template>
				</v-list-group>
			</template>
		</v-list>
	</v-navigation-drawer>
</template>
