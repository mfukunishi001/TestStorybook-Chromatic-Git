<script setup lang="ts">
interface Stepper {
	icon: string;
	label: string;
	hr: boolean;
	active: boolean;
};
const stepper_lists = ref<Stepper[]>([
	{ icon: '', label: '', hr: false, active: false, },
	{ icon: 'mdi-numeric-1-circle', label: '販売先情報', hr: false, active: false, },
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

const props = withDefaults(defineProps<{
	stepNo: number,
}>(), {
	stepNo: 1,
});
stepper_lists.value.forEach((step, index) => {
	if ((props.stepNo * 2 - 1) == index) {
		step.active = true;
		step.icon += "-outline";
	} else if (step.icon && (props.stepNo * 2 - 1) > index) {
		step.active = true;
		step.icon = "mdi-check-circle";
	} else {
		step.active = false;
		// step.icon = "";
	}
});
</script>

<template>
	<div>
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

		<!-- 疑似ステッパー -->
		<v-row class="d-flex justify-center align-center" dense>
			<template v-for="list in stepper_lists">
				<v-col v-if="list.icon != ''" class="d-flex justify-center align-center">
					<!-- <v-icon :icon="!list.active ? list.icon : list.icon + '-outline'" :class="{ 'text-grey-lighten-1': !list.active }"></v-icon> -->
					<v-icon :icon="list.icon" :class="{ 'text-grey-lighten-1': !list.active }"></v-icon>
				</v-col>
				<v-col v-else-if="list.hr">
					<hr>
				</v-col>
				<v-col v-else>
				</v-col>
			</template>
		</v-row>
		<v-row class="d-flex justify-center align-center text-body-2" dense>
			<template v-for="list in stepper_lists">
				<v-col v-if="list.label != ''" class="d-flex justify-center align-center">
					<span :class="{ 'text-grey-lighten-1': !list.active, }">{{ list.label }}</span>
				</v-col>
				<v-col v-else>
				</v-col>
			</template>
		</v-row>
		<!-- タイトル -->
		<div class="input-area-yoko">
			<div class="title-style">{{ stepper_lists[props.stepNo * 2 - 1].label }}
				<v-icon size="18px" color="rgb(171, 180, 198)" end icon="mdi-help-circle"></v-icon>
			</div>
		</div>
		<v-divider></v-divider>
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

/* title */
.title-style {
	font-size: 18px;
	font-weight: bold;
	margin: 20px 12px 20px 12px;
}
</style>
