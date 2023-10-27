<script setup lang="ts">
const dialog1 = ref<boolean>(false);

const stepNo = ref<number>(4);

interface Stepper {
	icon: string;
	label: string;
	hr: boolean;
	active: boolean;
};
const stepper_lists = ref<Stepper[]>([
	{ icon: '', label: '', hr: false, active: false, },
	{ icon: 'mdi-check-circle', label: '販売先情報', hr: false, active: true, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-check-circle', label: '担当者情報', hr: false, active: true, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-check-circle', label: '見積情報', hr: false, active: true, },
	{ icon: '', label: '', hr: true, active: false, },
	{ icon: 'mdi-numeric-4-circle-outline', label: '納品先情報', hr: false, active: true, },
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
	// {
	// 	lists: [
	// 		{ cols: 4, type: 'text', color: 'info', label: '営業担当部門コード [必須]', placeholder: '営業担当部門コード', icon: 'mdi-magnify', suffix: '' },
	// 		{ cols: 8, type: 'text', color: 'success', label: '営業担当部門名', placeholder: '営業担当部門名', icon: '', suffix: '' },
	// 	],
	// },
	// {
	// 	lists: [
	// 		{ cols: 4, type: 'text', color: 'info', label: '営業担当者コード [必須]', placeholder: '営業担当者コード', icon: 'mdi-magnify', suffix: '' },
	// 		{ cols: 4, type: 'text', color: 'success', label: '営業担当者名', placeholder: '営業担当者名', icon: '', suffix: '' },
	// 	],
	// },
]);
</script>

<template>
	<v-main class="bg-blue-lighten-5">
		<v-container>
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
					<v-col cols="12" class="d-flex">
						<v-btn class="ma-2" color="primary">
							次へ
							<v-dialog v-model="dialog1" activator="parent" width="auto">
								<v-card>
									<v-card-text>
										未対応（作成中）
									</v-card-text>
									<v-card-actions>
										<v-btn color="secondary" block @click="dialog1 = false">閉じる</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
						</v-btn>
						<v-spacer></v-spacer>
						<v-btn class="ma-2" color="accent" to="/sls/scrn002/step003">戻る</v-btn>
					</v-col>
				</v-row>

			</v-container>
		</v-container>
	</v-main>
</template>
