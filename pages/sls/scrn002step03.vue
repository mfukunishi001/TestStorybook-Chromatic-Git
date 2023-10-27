<!--
	'/sls/scrn002/'に移動＆ファイル名変更
		scrn002step03.vue ⇒ step003.vue
	★削除予定
-->
<script setup lang="ts">

const stepNo = ref<number>(3);

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
	{ icon: 'mdi-numeric-3-circle-outline', label: '見積情報', hr: false, active: true, },
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
			{ cols: 4, type: 'date', color: 'success', label: '見積日 [必須]', placeholder: '見積日', icon: '', suffix: '' },
			{ cols: 4, type: 'date', color: 'success', label: '見積有効期限 [必須]', placeholder: '見積有効期限', icon: '', suffix: '' },
			{ cols: 4, type: 'date', color: 'success', label: '希望納期 [必須]', placeholder: '希望納期', icon: '', suffix: '' },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'text', color: 'success', label: '件名 [必須]', placeholder: '件名', icon: '', suffix: '' },
		],
	},
	{
		lists: [
			{ cols: 12, type: 'textarea', color: 'success', label: '摘要', placeholder: '摘要', icon: '', suffix: '' },
		],
	},
]);

const files = ref<File[]>([]);
const isDragging = ref<boolean>(false);
const dragCount = ref<number>(0);
function onDrop(event: DragEvent): void {
	event.preventDefault();
	event.stopPropagation();
	isDragging.value = false;
	if (event.dataTransfer && event.dataTransfer.files) {
		const fileList = event.dataTransfer.files;
		for (let i = 0; i < fileList.length; i++) {
			files.value.push(fileList[i]);
		}
	}
};
function onDragEnter(event: DragEvent): void {
	event.preventDefault();
	isDragging.value = true;
	dragCount.value++;
};
function onDragLeave(event: DragEvent): void {
	event.preventDefault();
	dragCount.value--;
	if (dragCount.value <= 0) {
		isDragging.value = false;
	}
};
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
			</v-container>

			<v-container class="bg-white mt-3">
				<v-row dense>
					<v-col cols="12">
						ややこしい見積表領域
					</v-col>
				</v-row>
			</v-container>

			<v-container class="bg-white mt-3">
				<!--
				<v-container>
					<v-row class="text-center" @dragover.prevent @dragenter="onDragEnter" @dragleave="onDragLeave" @drop="onDrop">
						<v-file-input v-model="files" color="deep-purple accent-4" counter label="File input" multiple placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000" :background-color="isDragging ? 'blue' : 'null'">
							<template v-slot:selection="{ fileNames }">
								<template v-for="(fileName, index) in fileNames" :key="fileName">
									<v-chip v-if="index < 5" color="deep-purple-accent-4" label size="small" class="me-2"> {{ fileName }} </v-chip>
									<span v-else-if="index === 5" class="text-overline text-grey-darken-3 mx-2"> +{{ files.length - 5 }} File(s) </span>
								</template>
							</template>
						</v-file-input>
					</v-row>
				</v-container>
				-->
				<v-row dense>
					<v-col cols="6">
						<v-sheet class="text-center rounded-lg" elevation="3" @dragover.prevent @dragenter="onDragEnter" @dragleave="onDragLeave" @drop="onDrop">
							<br>
							<p>ここにファイルをドラック＆ドロップ</p>
							<p>または</p>
							<v-btn class="ma-2" color="info" append-icon="mdi-upload-multiple">ファイル選択</v-btn>
							<br>
						</v-sheet>
					</v-col>
				</v-row>

				<v-row class="my-5" dense>
					<v-col cols="6" @dragover.prevent @dragenter="onDragEnter" @dragleave="onDragLeave" @drop="onDrop" style="border: solid 1px;">
						<v-file-input base-color="info" color="info" v-model="files" counter label="ここにファイルをドラック＆ドロップ又は、ファイルを選択" multiple outlined :show-size="1000" :background-color="isDragging ? 'blue' : 'null'">
							<template v-slot:selection="{ fileNames }">
								<template v-for="(fileName, index) in fileNames" :key="fileName">
									<v-chip v-if="index < 2" label size="small" class="me-2"> {{ fileName }} </v-chip>
									<span v-else-if="index === 2" class="mx-2"> +{{ files.length - 2 }} File(s) </span>
								</template>
							</template>
						</v-file-input>
					</v-col>
					<v-col cols="6">
						アップロード済みファイルリスト
					</v-col>
				</v-row>

				<v-row dense>
					<v-col cols="4">
						<v-btn class="ma-2" color="primary" to="/sls/scrn002step02">戻る</v-btn>
						<v-btn class="ma-2" color="primary" to="/sls/scrn002step04">次へ</v-btn>
					</v-col>
				</v-row>
			</v-container>

		</v-container>
	</v-main>
</template>
