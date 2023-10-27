<script setup lang="ts">
const selected1 = ref("");
const items1: string[] = ["項目a", "項目b", "項目c", "項目d",];

type Item2 = { id?: number; name: string; };
const items2: Item2[] = [
	{ id: 21, name: "項目21", },
	{ id: 22, name: "項目22", },
	{ id: 23, name: "項目23", },
	{ id: 24, name: "項目24", },
	{ id: 25, name: "項目25", },
];
// const selected2 = ref(items2[2].id);
const selected2 = ref(undefined);

interface Item3 { id: number; title: string; value: string; };
const items3: Item3[] = [
	{ id: 1, title: "項目31", value: "31", },
	{ id: 2, title: "項目32", value: "32", },
	{ id: 3, title: "項目33", value: "33", },
	{ id: 4, title: "項目34", value: "34", },
	{ id: 5, title: "項目35", value: "35", },
];
// const selected3 = ref(items3[2]);
const selected3 = ref<Item3>({ id: 0, title: "", value: "", });

function changedValue(value: any): void {
	console.log("value", value);
};

const fruits: string[] = [
	'Apples', 'Apricots', 'Avocado', 'Bananas', 'Blueberries', 'Blackberries', 'Boysenberries', 'Bread fruit', 'Cantaloupes', 'Cherries',
	// 'Cranberries', 'Cucumbers', 'Currants', 'Dates', 'Eggplant', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Honeydew melons',
	// 'Huckleberries', 'Kiwis', 'Kumquat', 'Lemons', 'Limes', 'Mangos', 'Mulberries', 'Muskmelon', 'Nectarines', 'Olives',
	// 'Oranges', 'Papaya', 'Peaches', 'Pears', 'Persimmon', 'Pineapple', 'Plums', 'Pomegranate', 'Raspberries', 'Rose Apple',
	// 'Starfruit', 'Strawberries', 'Tangerines', 'Tomatoes', 'Watermelons', 'Zucchini',
];
const selectedFruits = ref<string[]>([]);
const likesAllFruit = computed<boolean>(() => {
	return (selectedFruits.value.length === fruits.length);
});
const likesSomeFruit = computed<boolean>(() => {
	return (selectedFruits.value.length > 0);
});
const title = computed<string>(() => {
	if (likesAllFruit.value) {	// 関数式の結果（戻り値）は、valueに格納されている
		return 'Holy smokes, someone call the fruit police!';
	}
	if (likesSomeFruit.value) {
		return 'Fruit Count';
	}
	return 'How could you not like fruit?';
});
const subtitle = computed<number | string | undefined>(() => {
	if (likesAllFruit.value) {
		return undefined;
	}
	if (likesSomeFruit.value) {
		return selectedFruits.value.length;
	}
	return 'Go ahead, make a selection above!';
});
function toggle(): void {
	if (likesAllFruit.value) {
		selectedFruits.value = [];
	} else {
		selectedFruits.value = fruits.slice();
	}
};
</script>

<template>
	<v-main>
		<v-container>
			<div>v-select : style</div>
			<v-row>
				<v-col>
					<v-select class="ma-2" v-model="selected1" :items="items1" label="選択肢" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
				<v-col>
					<v-select variant="outlined" class="ma-2" v-model="selected1" :items="items1" label="outlined" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
				<v-col>
					<v-select variant="plain" class="ma-2" v-model="selected1" :items="items1" label="plain" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
				<v-col>
					<v-select variant="underlined" class="ma-2" v-model="selected1" :items="items1" label="underlined" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-select variant="filled" class="ma-2" v-model="selected1" :items="items1" label="filled" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
				<v-col>
					<v-select variant="solo" class="ma-2" v-model="selected1" :items="items1" label="solo" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
				<v-col>
					<v-select variant="solo-inverted" class="ma-2" v-model="selected1" :items="items1" label="solo-inverted" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
				<v-col>
					<v-select variant="solo-filled" class="ma-2" v-model="selected1" :items="items1" label="solo-filled" clearable @update:modelValue="changedValue"></v-select>
				</v-col>
			</v-row>
			値： {{ selected1 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-select : value</div>
			<v-select class="ma-2" :items="items2" v-model="selected2" item-title="name" item-value="id" label="選択してください" :hint="`[${selected2}]`" @update:modelValue="changedValue"></v-select>
			値： {{ selected2 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-select : object</div>
			<v-select class="ma-2" :items="items3" v-model="selected3" return-object item-title="title" item-value="value" label="選択してください" :hint="`[${selected3.id}, ${selected3.title}, ${selected3.value}]`" persistent-hint @update:modelValue="changedValue"></v-select>
			値： {{ selected3 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-select : slot</div>
			<v-select v-model="selectedFruits" :items="fruits" label="Favorite Fruits" multiple>
				<template v-slot:prepend-item>
					<!-- <v-list-item :subtitle="subtitle" :title="title" disabled>
						<template v-slot:prepend>
							<v-avatar icon="mdi-food-apple" color="primary">mdi-food-apple</v-avatar>
						</template>
					</v-list-item>
					<v-divider class="mb-2"></v-divider> -->
					<v-list-item title="Select All" @click="toggle">
						<template v-slot:prepend>
							<v-checkbox-btn :color="likesSomeFruit ? 'indigo-darken-4' : undefined" :indeterminate="likesSomeFruit && !likesAllFruit" :model-value="likesSomeFruit"></v-checkbox-btn>
						</template>
					</v-list-item>
					<v-divider class="mt-2"></v-divider>
				</template>
				<template v-slot:append-item>
					<v-divider class="mb-2"></v-divider>
					<v-list-item :subtitle="subtitle" :title="title" disabled>
						<template v-slot:prepend>
							<v-avatar icon="mdi-food-apple" color="primary">mdi-food-apple</v-avatar>
						</template>
					</v-list-item>
				</template>
			</v-select>
		</v-container>

		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
