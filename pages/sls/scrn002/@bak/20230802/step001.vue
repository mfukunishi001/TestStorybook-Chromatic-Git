<script setup lang="ts">
const stepNo = ref<number>(1);
const subTitle = ref<string>('販売先情報'); /* vuetify3版のみ */

interface Text_File {
	cols: number;
	type: string;
	color: string;
	label: string;
	placeholder: string;
	icon: string;
	suffix: string;
	width: string;
	borderColor: string;
	required: boolean;
};
interface Grid_List {
	lists: Text_File[];
};
const grid_lists = ref<Grid_List[]>([
	{
		lists: [
			{ cols: 4, type: 'text', color: 'info', label: '販売先コード', placeholder: '販売先コード', icon: 'mdi-magnify', suffix: '', width: "232px", borderColor: "rgb(1, 149, 255)", required: true, },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'text', color: 'success', label: '販売先名', placeholder: '販売先名', icon: '', suffix: '', width: "748px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '郵便番号', placeholder: '郵便番号', icon: '', suffix: '', width: "232px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '都道府県', placeholder: '都道府県', icon: '', suffix: '', width: "232px", borderColor: "rgb(44, 221, 162)", required: false, },
			{ cols: 4, type: 'text', color: 'success', label: '市区町村', placeholder: '市区町村', icon: '', suffix: '', width: "232px", borderColor: "rgb(44, 221, 162)", required: false, },
			{ cols: 4, type: 'text', color: 'success', label: '町域名', placeholder: '町域名', icon: '', suffix: '', width: "232px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'text', color: 'success', label: 'ビル名', placeholder: 'ビル名', icon: '', suffix: '', width: "748px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '電話番号', placeholder: '電話番号', icon: '', suffix: '', width: "232px", borderColor: "rgb(44, 221, 162)", required: false, },
			{ cols: 4, type: 'text', color: 'success', label: 'FAX番号', placeholder: 'FAX番号', icon: '', suffix: '', width: "232px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'text', color: 'success', label: '回収条件表記', placeholder: '回収条件表記', icon: '', suffix: '', width: "748px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ cols: 4, type: 'text', color: 'success', label: '販売先担当者', placeholder: '', icon: '販売先担当者', suffix: '様', width: "232px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
]);
</script>

<template>
	<div>
		<v-main class="my-8 mx-10">
			<v-container class="pa-0">
				<v-container class="bg-white mb-5">
					<v-sheet height="100px" class="border">

					</v-sheet>
				</v-container>
				<v-container class="bg-white">
					<div class="d-none">
						<!-- ステッパー（タイトル含む） -->
						<SlsMockStepper :stepNo="stepNo"></SlsMockStepper>
						<!-- チェックボックス -->
						<div class="input-area-yoko">
							<label class="checkbox-label-style"><input type="checkbox" class="checkbox-style" />見積書へ表示される項目</label>
						</div>
						<!-- 入力 -->
						<div class="input-area-row-tate">
							<div v-for="grid_list in grid_lists" class="input-area-yoko">
								<div v-for="list in grid_list.lists" :cols="list.cols" class="input-area-row-tate">
									<label class="input-label-style">{{ list.label }}
										<span v-if="list.required" :style="{ fontWeight: 'bold', color: list.borderColor, }">[必須]</span>
									</label>
									<div class="input-area-yoko">
										<div v-if="list.type == 'textarea'">
											<textarea>未対応</textarea>
										</div>
										<div v-else>
											<div class="input-position-base">
												<input :type="list.type" class="input-style" :class="{ 'input-icon-right': list.required, }" :style="{ width: list.width, borderColor: list.borderColor, }" />
												<div v-if="list.required" class="icon-right">
													<v-icon :icon="list.icon"></v-icon>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- ボタン -->
						<div class="input-area-yoko">
							<button class="button-style" @click="$router.push('/sls/scrn002/step002');">次へ</button>
						</div>
					</div>

					<!-- vuetify3版 -->
					<div class="_d-none">
						<!-- タイトル -->
						<v-row dense>
							<v-col class="d-flex align-center" cols="12">
								<span class="text-h4">{{ subTitle }}</span>
								<v-icon end icon="mdi-help-circle-outline"></v-icon>
							</v-col>
							<v-divider></v-divider>
						</v-row>
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
								<v-text-field v-else :type="list.type" :base-color="list.color" :color="list.color" :label="list.label" :placeholder="list.placeholder" :append-inner-icon="list.icon" :suffix="list.suffix" density="compact" variant="outlined" hide-details="auto" clearable></v-text-field>
							</v-col>
						</v-row>
						<!-- ボタン -->
						<v-row dense>
							<v-col cols="12">
								<v-btn class="ma-2" color="primary" to="/sls/scrn002/step002">次へ</v-btn>
							</v-col>
						</v-row>
					</div>

				</v-container>
			</v-container>
		</v-main>
	</div>
</template>

<style scoped>
/* 横並び */
.input-area-yoko {
	/* border: 1px dotted red; */
	display: flex;
	flex-direction: row;
}

/* 縦並び */
.input-area-row-tate {
	/* border: 1px dotted blue; */
	display: flex;
	flex-direction: column;
}

/* checkboxのlabel */
.checkbox-label-style {
	color: rgb(171, 180, 198);
	font-size: 14px;
}

/* checkbox */
.checkbox-style {
	align-items: center;
	font-size: 14px;
	margin: 16px 12px 9px 12px;
	accent-color: rgb(44, 221, 162);
	/* チェックマークの枠線は難しい */
}

/* inputのlabel */
.input-label-style {
	color: rgb(171, 180, 198);
	margin: 9px 12px 0px 12px;
	font-size: 12px;
}

/* inputの位置 */
.input-position-base {
	position: relative;
	/* 基準値 */
}

/* input */
.input-style {
	font-size: 14px;
	margin: 0px 12px 9px 12px;
	padding: 4px;
	outline: none;
	/* フォーカス時の枠線無し */
	border: 1px solid;
	/* 枠線 : 太さ 種類 */
	background-color: rgb(247, 249, 252);
	/* 背景色 */
}

/* input */
.input-icon-right {
	padding-right: 2.5em;
	/* アイコンを設置するための余白 */
}

/* inputのicon */
.icon-right {
	position: absolute;
	/* 基準値からの相対位置に指定 */
	color: rgb(1, 149, 255);
	border-left: 1px solid rgb(1, 149, 255);
	background-color: rgb(222, 235, 254);
	padding: 2px 2px;
	/* アイコンの大きさ調整 */
	top: 1px;
	/* アイコンの位置調整 */
	right: 13px;
	/* アイコンの位置調整 */
}

/* button */
.button-style {
	color: white;
	background-color: rgb(51, 102, 255);
	width: 100px;
	height: 40px;
	margin: 27px 12px 9px 12px;
	padding: 4px;
	font-size: 14px;
}
</style>
