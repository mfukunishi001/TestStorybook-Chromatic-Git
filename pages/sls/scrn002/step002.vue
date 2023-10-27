<script setup lang="ts">
const stepNo = ref<number>(2);
const subTitle = ref<string>('担当者情報');

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
			{ cols: 4, type: 'text', color: 'info', label: '営業担当部門コード [必須]', placeholder: '営業担当部門コード', icon: 'mdi-magnify', suffix: '' },
			{ cols: 8, type: 'text', color: 'success', label: '営業担当部門名', placeholder: '営業担当部門名', icon: '', suffix: '' },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'info', label: '営業担当者コード [必須]', placeholder: '営業担当者コード', icon: 'mdi-magnify', suffix: '' },
			{ cols: 4, type: 'text', color: 'success', label: '営業担当者名', placeholder: '営業担当者名', icon: '', suffix: '' },
		],
	},
]);
</script>

<template>
	<div>
		<v-main class="my-8 mx-10">
			<v-container class="pa-0">
				<v-container class="bg-white">
					<div class="_d-none">
						<!-- ステッパー（タイトル含む） -->
						<SlsMockStepper :stepNo="stepNo"></SlsMockStepper>
					</div>

					<!-- vuetify3版 -->
					<div class="_d-none">
						<!-- チェックボックス -->
						<v-row dense>
							<v-col cols="4">
								<v-checkbox color="success" label="見積書へ表示される項目" density="compact" hide-details="auto"></v-checkbox>
							</v-col>
						</v-row>
						<!-- 入力 -->
						<v-row v-for="grid_list in grid_lists" dense>
							<v-col v-for="list in grid_list.lists" :cols="list.cols">
								<v-textarea v-if="list.type == 'textarea'" auto-grow rows="2" max-rows="5" :base-color="list.color" :color="list.color" :label="list.label" :placeholder="list.placeholder" :append-inner-icon="list.icon" :suffix="list.suffix" density="compact" variant="outlined" hide-details="auto" clearable></v-textarea>
								<v-text-field v-else :type="list.type" :base-color="list.color" :color="list.color" :placeholder="list.placeholder" :append-inner-icon="list.icon" :suffix="list.suffix" density="compact" variant="outlined" hide-details="auto" clearable></v-text-field>
							</v-col>
						</v-row>
						<!-- ボタン -->
						<v-row dense>
							<v-col cols="12" class="d-flex">
								<v-btn class="ma-2" color="primary" to="/sls/scrn002/step003">次へ</v-btn>
								<v-spacer></v-spacer>
								<v-btn class="ma-2" color="accent" to="/sls/scrn002/step001">戻る</v-btn>
							</v-col>
						</v-row>
					</div>

				</v-container>
			</v-container>
		</v-main>
	</div>
</template>
