<!--
	'/sls/scrn002/'に移動＆ファイル名変更
		scrn002step01.vue ⇒ step001.vue
	★削除予定
-->
<script setup lang="ts">

const stepNo = ref<number>(1);

interface Stepper {
	icon: string;
	label: string;
	hr: boolean;
	active: boolean;
};
const stepper_lists = ref<Stepper[]>([
	{ icon: '', label: '', hr: false, active: false, },
	{ icon: 'mdi-numeric-1-circle-outline', label: '販売先情報', hr: false, active: true, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-numeric-2-circle', label: '担当者情報', hr: false, active: false, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-numeric-3-circle', label: '見積情報', hr: false, active: false, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-numeric-4-circle', label: '納品先情報', hr: false, active: false, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-numeric-5-circle', label: '仕入先情報', hr: false, active: false, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-numeric-6-circle', label: 'プロジェクト情報', hr: false, active: false, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-numeric-7-circle', label: '確認画面', hr: false, active: false, },
	{ icon: '', label: '', hr: false, active: false, },
]);

interface Text_File {
	cols: number;
	type: string;
	color: string;
	label: string;
	placeholder: string;
	icon: string;
	suffix: string;
};
interface Grid_List {
	lists: Text_File[];
};
const grid_lists = ref<Grid_List[]>([
	{
		lists: [
			{ cols: 4, type: 'text', color: 'info', label: '販売先コード [必須]', placeholder: '販売先コード', icon: 'mdi-magnify', suffix: '' },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'text', color: 'success', label: '販売先名', placeholder: '販売先名', icon: '', suffix: '', },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '郵便番号', placeholder: '郵便番号', icon: '', suffix: '', },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '都道府県', placeholder: '都道府県', icon: '', suffix: '', },
			{ cols: 4, type: 'text', color: 'success', label: '市区町村', placeholder: '市区町村', icon: '', suffix: '', },
			{ cols: 4, type: 'text', color: 'success', label: '町域名', placeholder: '町域名', icon: '', suffix: '', },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'text', color: 'success', label: 'ビル名', placeholder: 'ビル名', icon: '', suffix: '', },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '電話番号', placeholder: '電話番号', icon: '', suffix: '', },
			{ cols: 4, type: 'text', color: 'success', label: 'FAX番号', placeholder: 'FAX番号', icon: '', suffix: '', },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'text', color: 'success', label: '回収条件表記', placeholder: '回収条件表記', icon: '', suffix: '', },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '販売先担当者', placeholder: '', icon: '販売先担当者', suffix: '様', },
		],
	},
]);
</script>

<template>
	<v-main>
		<v-container class="bg-blue-lighten-5">
			<v-container class="bg-white">
				<div class="d-none">
					<v-container>
						<ul>
							<li>【作成中】業務メニュー -> 販売 -> 見積
								<br>vuetify2にあったv-stepperは、vuetify3では未対応
								<br>リリース予定: v3.4 (blackguard) 2023 年第 3 四半期 (https://vuetifyjs.com/en/introduction/roadmap/#v3-4-blackguard)
								<br>stepperは、見た目のみをがんばって再現
							</li>
						</ul>
					</v-container>
					<v-divider></v-divider>
				</div>

				<v-row class="d-flex justify-center align-center" dense>
					<template v-for="list in stepper_lists">
						<v-col v-if="list.icon != ''" class="d-flex justify-center align-center">
							<v-icon :icon="list.icon" :class="{ 'text-grey-lighten-1': !list.active }"></v-icon>
						</v-col>
						<v-col v-else-if="list.hr">
							<hr>
						</v-col>
						<v-col v-else>
						</v-col>
					</template>
				</v-row>
				<v-row class="d-flex justify-center align-center" dense>
					<template v-for="list in stepper_lists">
						<v-col v-if="list.label != ''" class="d-flex justify-center align-center">
							<span :class="{ 'text-grey-lighten-1': !list.active }">{{ list.label }}</span>
						</v-col>
						<v-col v-else>
						</v-col>
					</template>
				</v-row>

				<v-row dense>
					<v-col class="d-flex align-center" cols="12">
						<span class="text-h4">{{ stepper_lists[stepNo * 2 - 1].label }}</span>
						<v-icon end icon="mdi-help-circle-outline"></v-icon>
					</v-col>
					<v-divider></v-divider>
				</v-row>

				<v-row dense>
					<v-col cols="4">
						<v-checkbox color="success" label="見積書へ表示される項目" density="compact" hide-details="auto"></v-checkbox>
					</v-col>
				</v-row>

				<v-row v-for="grid_list in grid_lists" dense>
					<v-col v-for="list in grid_list.lists" :cols="list.cols">
						<v-textarea v-if="list.type == 'textarea'" auto-grow rows="2" max-rows="5" :base-color="list.color" :color="list.color" :label="list.label" :placeholder="list.placeholder" :append-inner-icon="list.icon" :suffix="list.suffix" density="compact" variant="outlined" hide-details="auto" clearable></v-textarea>
						<v-text-field v-else :type="list.type" :base-color="list.color" :color="list.color" :label="list.label" :placeholder="list.placeholder" :append-inner-icon="list.icon" :suffix="list.suffix" density="compact" variant="outlined" hide-details="auto" clearable></v-text-field>
					</v-col>
				</v-row>

				<v-row dense>
					<v-col cols="4">
						<v-btn class="ma-2" color="primary" to="/sls/scrn002step02">次へ</v-btn>
					</v-col>
				</v-row>

			</v-container>
		</v-container>
	</v-main>
</template>
