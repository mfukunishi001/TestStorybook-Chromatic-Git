<script setup lang="ts">
// ステップ番号（１始まり）
const stepNo = ref<number>(1);
// ステッパー情報
interface Stepper {
	value: string;
	title: string;
};
const stepper_lists = ref<Stepper[]>([
	{ value: '1', title: '販売先情報', },
	{ value: '2', title: '担当者情報', },
	{ value: '3', title: '見積情報', },
	{ value: '4', title: '納品先情報', },
	{ value: '5', title: '仕入先情報', },
	{ value: '6', title: 'プロジェクト情報', },
	{ value: '7', title: '確認画面', },
]);
// 設定情報
interface SetInfo {
	value: string;
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
interface GridList {
	lists: SetInfo[];
};
const grid_lists = ref<GridList[]>([
	{
		lists: [
			{ value: '', cols: 12, type: 'checkbox', color: 'success', label: '見積書へ表示される項目', placeholder: '', icon: '', suffix: '', width: "", borderColor: "", required: true, },
		],
	},
	{
		lists: [
			{ value: '', cols: 4, type: 'text', color: 'info', label: '販売先コード', placeholder: '販売先コード', icon: 'mdi-magnify', suffix: '', width: "250px", borderColor: "rgb(1, 149, 255)", required: true, },
		],
	},
	{
		lists: [
			{ value: '', cols: 12, type: 'text', color: 'success', label: '販売先名', placeholder: '販売先名', icon: '', suffix: '', width: "750px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ value: '', cols: 4, type: 'text', color: 'success', label: '郵便番号', placeholder: '郵便番号', icon: '', suffix: '', width: "250px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ value: '', cols: 4, type: 'text', color: 'success', label: '都道府県', placeholder: '都道府県', icon: '', suffix: '', width: "250px", borderColor: "rgb(44, 221, 162)", required: false, },
			{ value: '', cols: 4, type: 'text', color: 'success', label: '市区町村', placeholder: '市区町村', icon: '', suffix: '', width: "250px", borderColor: "rgb(44, 221, 162)", required: false, },
			{ value: '', cols: 4, type: 'text', color: 'success', label: '町域名', placeholder: '町域名', icon: '', suffix: '', width: "250px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ value: '', cols: 12, type: 'text', color: 'success', label: 'ビル名', placeholder: 'ビル名', icon: '', suffix: '', width: "750px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ value: '', cols: 4, type: 'text', color: 'success', label: '電話番号', placeholder: '電話番号', icon: '', suffix: '', width: "250px", borderColor: "rgb(44, 221, 162)", required: false, },
			{ value: '', cols: 4, type: 'text', color: 'success', label: 'FAX番号', placeholder: 'FAX番号', icon: '', suffix: '', width: "250px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ value: '', cols: 12, type: 'text', color: 'success', label: '回収条件表記', placeholder: '回収条件表記', icon: '', suffix: '', width: "750px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
	{
		lists: [
			{ value: '', cols: 4, type: 'text', color: 'success', label: '販売先担当者', placeholder: '販売先担当者', icon: '', suffix: '様', width: "250px", borderColor: "rgb(44, 221, 162)", required: false, },
		],
	},
]);
// 販売先情報
const jsonTexts = `
[
	{
		"Code": "00495600-000",
		"Name": "佐川林業株式会社",
		"NameKana": "サガワリンギョウ",
		"PostNo": "601-8104",
		"Address1": "京都府",
		"Address2": "京都市南区",
		"Address3": "上鳥羽角田町68",
		"Address4": "",
		"Tel": "075-691-6500",
		"Fax": "075-682-3784",
		"KaishuJyouken": "末日締め翌月末日支払"
	},
	{
		"Code": "42498000-000",
		"Name": "竹丸渋谷水産株式会社",
		"NameKana": "タケマルシブヤスイサン",
		"PostNo": "059-0641",
		"Address1": "北海道",
		"Address2": "白老郡",
		"Address3": "白老町虎杖浜179-5",
		"Address4": "",
		"Tel": "0144-87-2433",
		"Fax": "",
		"KaishuJyouken": "末締め翌月末払"
	}
]`;
interface SlsDestInfo {
	Code: string;
	Name: string;
	CategolyName: string;
	PostNo: string;
	Address1: string;
	Address2: string;
	Address3: string;
	Address4: string;
	NameKana: string;
	Tel: string;
	Fax: string;
	KaishuJyouken: string;
};
const slsDestInfo = ref<SlsDestInfo>({
	Code: '', Name: '', CategolyName: '', PostNo: '', Address1: '', Address2: '', Address3: '', Address4: '', NameKana: '', Tel: '', Fax: '', KaishuJyouken: '',
});
// 販売先情報検索
async function searchSlsDestInfo() {
	if (!slsDestInfo.value.Code) {
		return;
	}
	console.log(slsDestInfo.value.Code);
	const code = slsDestInfo.value.Code;

	// ----------------------------------------
	// 販売先情報取得
	// ①REST APIで直接取得
	// ⇒ CORS問題発生：Rest Apiのサーバがlocalhost:3000のアクセスを許可していないようだ
	// const url = 'http://10.14.50.75:8080/rest/myservice/v1/resource/00495600-000';
	// const url = 'http://10.14.50.75:8080/rest/myservice/v1/resource/' + code;
	// const url = 'http://10.14.50.75:8080/rest/myservice/v1/resource/GetMulti?Code=' + code;
	// const url = 'http://10.14.50.75:8000/List?Code=' + code;

	// ②ローカルサーバ経由で取得（nuxt.config.tsのvite.server.proxy参照）
	// ⇒ 開発環境（npm run dev）でのみ動作する
	// const url = '/api/rest/myservice/v1/resource/00495600-000';
	// const url = '/api/rest/myservice/v1/resource/' + code;
	// const url = '/api/rest/myservice/v1/resource/GetMulti?Code=' + code;
	// const url = '/mnedix/rest/myservice/v1/resource/GetMulti?Code=' + code;
	const url = '/kong/List?Code=' + code;

	// ① or ②
	console.log(url);
	const { data, error } = await useLazyFetch(url);
	if (data.value) {
		console.log(data.value);
		const slsDestInfos = data.value as SlsDestInfo[];
		if (slsDestInfos.length > 0) {
			slsDestInfo.value = slsDestInfos[0];
		} else {
			// 初期化
			initSlsDestInfo();
			alert('該当なし!!\n販売先コード:' + code);
		}
	} else {
		console.log('error!!');
		if (error.value) {
			console.log(error.value);
			if (error.value.data) { console.log(error.value.data.message); }
			console.log(error.value.statusCode);
			console.log(error.value.message);
			alert(error.value.data?.message
				+ '\n statusCode:' + error.value.statusCode
				+ '\n message:' + error.value.message
			);
		} else {
			alert('error!!');
		}
	}

	// ⑨固定値で取得
	// 一覧から取得
	// const slsDestInfos = JSON.parse(jsonTexts) as SlsDestInfo[];
	// slsDestInfo.value = slsDestInfos[slsDestInfos.length - 1];
};
// 販売情報設定
function setSlsDestInfo() {
	if (slsDestInfo.value) {
		console.log(slsDestInfo.value);
		// grid_lists.value[0].lists[0].value = slsDestInfo.value.unknown;
		grid_lists.value[1].lists[0].value = slsDestInfo.value.Code;
		grid_lists.value[2].lists[0].value = slsDestInfo.value.Name;
		grid_lists.value[3].lists[0].value = slsDestInfo.value.PostNo;
		grid_lists.value[4].lists[0].value = slsDestInfo.value.Address1;
		grid_lists.value[4].lists[1].value = slsDestInfo.value.Address2;
		grid_lists.value[4].lists[2].value = slsDestInfo.value.Address3;
		grid_lists.value[5].lists[0].value = slsDestInfo.value.Address4;
		grid_lists.value[6].lists[0].value = slsDestInfo.value.Tel;
		grid_lists.value[6].lists[1].value = slsDestInfo.value.Fax;
		grid_lists.value[7].lists[0].value = slsDestInfo.value.KaishuJyouken;
		// grid_lists.value[8].lists[0].value = slsDestInfo.value.unknown;
	}
	// 初期化
	initSlsDestInfo();
	// 検索ダイアログ画面を閉じる
	searchDialog.value = false;
};
// 初期化
function initSlsDestInfo(): void {
	// slsDestInfo.value.Code = '';
	slsDestInfo.value.Name = '';
	slsDestInfo.value.CategolyName = '';
	slsDestInfo.value.PostNo = '';
	slsDestInfo.value.Address1 = '';
	slsDestInfo.value.Address2 = '';
	slsDestInfo.value.Address3 = '';
	slsDestInfo.value.Address4 = '';
	slsDestInfo.value.Tel = '';
	slsDestInfo.value.Fax = '';
	slsDestInfo.value.KaishuJyouken = '';
};
// 検索ダイアログ画面表示有無
const searchDialog = ref<boolean>(false);
</script>

<template>
	<div>
		<v-main>
			<div class="my-5 mx-5">
				<v-container class="ma-0 pa-0">

					<!-- ステッパー領域 -->
					<v-sheet class="_border bg-white elevation-2">
						<!-- ステッパー行 -->
						<v-row no-gutters class="_border">
							<v-col cols="12" class="_border">
								<v-sheet class="_border">
									<v-stepper alt-labels class="elevation-0" :model-value="stepNo - 1">
										<v-stepper-header style="font-size: 12px;">
											<template v-for="(list, index) in stepper_lists">
												<v-stepper-item :value="list.value" :title="list.title" :complete="stepNo > (index + 1)"></v-stepper-item>
												<v-divider v-if="(index + 1) < stepper_lists.length"></v-divider>
											</template>
										</v-stepper-header>
									</v-stepper>
								</v-sheet>
							</v-col>
						</v-row>
					</v-sheet>

					<!-- サブタイトル領域 -->
					<v-sheet class="_border bg-white mt-3 elevation-2">
						<!-- サブタイトル行 -->
						<v-row no-gutters class="_border">
							<v-col cols="12" class="_border _px-2">
								<!-- サブタイトル -->
								<v-sheet class="_border pa-5">
									<span class="sub-title-style">{{ stepper_lists[stepNo - 1] ? stepper_lists[stepNo - 1].title : 'ステップ番号不正:' + stepNo }}</span>
								</v-sheet>
							</v-col>
						</v-row>
					</v-sheet>

					<!-- 設定領域 -->
					<v-sheet class="_border bg-white mt-1 px-3 py-2 elevation-2">
						<v-row v-for="grid_list in grid_lists" no-gutters class="_border _py-2">
							<v-col v-for="list in grid_list.lists" :cols="list.cols" :lg="list.cols / 2" class="_border _px-2">
								<v-sheet class="_border py-2 px-2">
									<template v-if="list.type === 'checkbox'">
										<!-- チェックボックス -->
										<v-sheet class="_border">
											<!-- チェックボックス -->
											<v-checkbox class="_border _checkbox-style" :color="list.color" density="compact" hide-details="auto">
												<template v-slot:label>
													<span class="_checkbox-label-style">{{ list.label }}</span>
												</template>
											</v-checkbox>
										</v-sheet>
									</template>
									<template v-else>
										<!-- テキストフィールド -->
										<template v-if="list.icon">
											<!-- アイコンあり＆クリックイベント -->
											<v-text-field @click:append-inner="searchDialog = true; initSlsDestInfo(); slsDestInfo.Code = list.value;" v-model="list.value" :type="list.type" :base-color="list.color" :color="list.color" :label="list.label" :placeholder="list.placeholder" :append-inner-icon="list.icon" :suffix="list.suffix" density="compact" variant="outlined" hide-details="auto" clearable></v-text-field>
											<!-- ダイアログ画面 -->
											<v-dialog v-model="searchDialog" persistent width="500px">
												<v-card>
													<v-card-title>
														<span class="text-h5">{{ grid_lists[1].lists[0].label }}</span>
													</v-card-title>
													<v-card-text>
														<v-row no-gutters class="_border py-2">
															<v-text-field v-model="slsDestInfo.Code" :type="grid_lists[1].lists[0].type" :base-color="grid_lists[1].lists[0].color" :color="grid_lists[1].lists[0].color" :label="grid_lists[1].lists[0].label" :placeholder="grid_lists[1].lists[0].placeholder" density="compact" variant="outlined" hide-details="auto" clearable></v-text-field>
														</v-row>
														<v-row no-gutters class="_border py-2">
															<v-col cols="12" class="_border px-2 d-flex">
																<v-btn class="button-style" @click="searchSlsDestInfo();">検索</v-btn>
																<v-spacer></v-spacer>
																<v-btn class="button-style" @click="setSlsDestInfo();">反映</v-btn>
															</v-col>
														</v-row>
														<br><v-label>{{ grid_lists[2].lists[0].label }}：{{ slsDestInfo.Name }}</v-label>
														<br><v-label>{{ grid_lists[3].lists[0].label }}：{{ slsDestInfo.PostNo }}</v-label>
														<br><v-label>{{ grid_lists[4].lists[0].label }}：{{ slsDestInfo.Address1 }}</v-label>
														<br><v-label>{{ grid_lists[4].lists[1].label }}：{{ slsDestInfo.Address2 }}</v-label>
														<br><v-label>{{ grid_lists[4].lists[2].label }}：{{ slsDestInfo.Address3 }}</v-label>
														<br><v-label>{{ grid_lists[5].lists[0].label }}：{{ slsDestInfo.Address4 }}</v-label>
														<br><v-label>{{ grid_lists[6].lists[0].label }}：{{ slsDestInfo.Tel }}</v-label>
														<br><v-label>{{ grid_lists[6].lists[1].label }}：{{ slsDestInfo.Fax }}</v-label>
														<br><v-label>{{ grid_lists[7].lists[0].label }}：{{ slsDestInfo.KaishuJyouken }}</v-label>
													</v-card-text>
													<v-card-actions>
														<v-btn color="primary" block @click="searchDialog = false">閉じる</v-btn>
													</v-card-actions>
												</v-card>
											</v-dialog>
										</template>
										<template v-else>
											<!-- アイコンなし -->
											<v-text-field v-model="list.value" :type="list.type" :base-color="list.color" :color="list.color" :label="list.label" :placeholder="list.placeholder" :append-inner-icon="list.icon" :suffix="list.suffix" density="compact" variant="outlined" hide-details="auto" clearable></v-text-field>
										</template>
									</template>
								</v-sheet>
							</v-col>
						</v-row>
						<!-- ボタン行 -->
						<v-row no-gutters class="_border _py-4">
							<v-col cols="12" class="_border _px-2">
								<v-sheet class="_border py-4 px-2 d-flex">
									<v-btn class="button-style" to="/sls/scrn002/step002">次へ</v-btn>
									<v-spacer></v-spacer>
									<v-btn class="ma-2" color="accent" to="/sls/scrn002/step101">step101へ</v-btn>
								</v-sheet>
							</v-col>
						</v-row>
					</v-sheet>

				</v-container>
			</div>
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
.input-area-tate {
	/* border: 1px dotted blue; */
	display: flex;
	flex-direction: column;
}

/* sub-title */
.sub-title-style {
	font-size: 18px;
	font-weight: bold;
}

/* checkboxのlabel */
.checkbox-label-style {
	font-size: 12px;
	/* color: rgb(171, 180, 198); */
}

/* checkbox */
.checkbox-style {
	font-size: 14px;
	/* accent-color: rgb(44, 221, 162); */
}

/* button */
.button-style {
	color: white;
	background-color: rgb(51, 102, 255);
	width: 100px;
	height: 40px;
	font-size: 14px;
}
</style>
