<script setup lang="ts">
const nav_drawer = ref();	// 未対応

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
	{ name: '業務メニュー', icon: '', active: false, link: '', },
	{
		name: '販売', icon: 'mdi-numeric-1-box-outline', active: false, link: '', lists: [
			{ name: '検索', link: '/sls/scrn001', icon: '', },
			{ name: '見積', link: '/sls/scrn002/step001', icon: '', },
			{ name: '受注', link: '/sls/scrn003', icon: '', },
			{ name: '売上', link: '/sls/scrn004', icon: '', },
		],
	},
	{
		name: '仕入', icon: 'mdi-numeric-2-box-outline', active: false, link: '', lists: [
			{ name: 'scrn005', link: '/sls/scrn005', icon: '', },
		],
	},
	{
		name: '請求', icon: 'mdi-numeric-3-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
	{
		name: '費用計上', icon: 'mdi-numeric-4-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
	{
		name: '継続取引', icon: 'mdi-numeric-5-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
	{ name: 'マスタメニュー', icon: '', active: false, link: '', },
	{
		name: '組織', icon: 'mdi-numeric-6-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
	{
		name: 'ユーザ', icon: 'mdi-numeric-7-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
	{
		name: '取引先', icon: 'mdi-numeric-8-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
	{
		name: '商品', icon: 'mdi-numeric-9-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
	{ name: '管理メニュー', icon: '', active: false, link: '', },
	{
		name: '通知設定', icon: 'mdi-numeric-10-box-outline', active: false, link: '', lists: [
			{ name: 'scrn000', link: '/sls/scrn000', icon: '', },
		],
	},
	{
		name: '権限設定', icon: 'mdi-numeric-0-box-outline', active: false, link: '', lists: [
			// { name: '未対応', link: '', icon: '', },
		],
	},
]);

// サブメニューが選択したときに、他のサブメニューを閉じる
function menu_close(): void {
	nav_lists.value.forEach((nav_list) => (nav_list.active = false));
};
</script>

<template>
	<div>
		<v-navigation-drawer v-model="nav_drawer" permanent width="256">
			<div class="_border d-flex justify-center">
				<span class="pa-4" style="font-size: 24px;">販売管理 <span style="font-size: 60%;">SGシステム</span></span>
			</div>
			<v-list nav density="compact">
				<template v-for="nav_list in nav_lists">
					<v-list-item v-if="!nav_list.lists && nav_list.icon == ''" class="text-grey">{{ nav_list.name }}</v-list-item>
					<v-list-item v-else-if="!nav_list.lists" :prepend-icon="nav_list.icon" :title="nav_list.name" :value="nav_list.name" :to="nav_list.link" @click="menu_close">
						<!-- <v-tooltip activator="parent" location="top">{{ nav_list.name }}</v-tooltip> -->
					</v-list-item>
					<v-list-group v-else :value="nav_list.name" v-model="nav_list.active">
						<template v-slot:activator="{ props }">
							<v-list-item v-bind="props" :prepend-icon="nav_list.icon" :title="nav_list.name">
								<!-- <v-tooltip activator="parent" location="top">{{ nav_list.name }}</v-tooltip> -->
							</v-list-item>
						</template>
						<template v-for="list in nav_list.lists">
							<v-list-item v-if="list.link.startsWith('/')" :prepend-icon="list.icon" :title="list.name" :value="list.name" :to="list.link">
								<!-- <v-tooltip activator="parent" location="top">{{ list.name }}</v-tooltip> -->
							</v-list-item>
							<v-list-item v-else :prepend-icon="list.icon" :title="list.name" :value="list.name" :href="list.link" target="_blank">
								<!-- <v-tooltip activator="parent" location="top">{{ list.name }}</v-tooltip> -->
							</v-list-item>
						</template>
					</v-list-group>
					<v-divider></v-divider>
				</template>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
