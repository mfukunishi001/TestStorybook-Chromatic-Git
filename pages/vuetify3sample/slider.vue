<script setup lang="ts">
const data1 = ref(0);

const data2 = ref(0);
function zoomIn(): void {
	data2.value = (data2.value + 10) || 100;
};
function zoomOut(): void {
	data2.value = (data2.value - 10) || 0;
};

interface Data3 { min: number; max: number; step: number; value: number; };
const data3 = ref<Data3>({ min: -50, max: 90, step: 0.1, value: 40, });

type Data4 = { min: number; max: number; step: number; red: number; green: number; blue: number; };
const data4 = ref<Data4>({ min: 0, max: 255, step: 1, red: 64, green: 128, blue: 10, });

const min5 = 4;
const max5 = 21;
const range5 = ref([10, 15]);
</script>

<template>
	<v-main>
		<v-container>
			<div>v-slider : Volume</div>
			<v-slider v-model="data1" step="1" color="black" label="Volume" thumb-label prepend-icon="mdi-volume-high"></v-slider>
			値： {{ data1 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-slider : Icon click callback</div>
			<v-slider v-model="data2" step="1" append-icon="mdi-magnify-plus-outline" prepend-icon="mdi-magnify-minus-outline" @click:append="zoomIn" @click:prepend="zoomOut"></v-slider>
			値： {{ data2 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-slider : Min and max</div>
			<v-slider v-model="data3.value" :step="data3.step" class="align-center" :max="data3.max" :min="data3.min" hide-details>
				<template v-slot:append>
					<v-text-field v-model="data3.value" hide-details single-line density="compact" type="number" style="width: 100px"></v-text-field>
				</template>
			</v-slider>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-slider : Append text field</div>
			<v-card width="400" style="margin: auto">
				<v-responsive :style="{ background: `rgb(${data4.red}, ${data4.green}, ${data4.blue})` }" height="200px"></v-responsive>
				<v-card-text>
					<v-slider v-model="data4.red" :max="data4.max" :min="data4.min" :step="data4.step" label="R" hide-details class="ma-4">
						<template v-slot:append>
							<v-text-field v-model="data4.red" type="number" :max="data4.max" :min="data4.min" :step="data4.step" style="width: 100px" density="compact" hide-details variant="outlined"></v-text-field>
						</template>
					</v-slider>
					<v-slider v-model="data4.green" :max="data4.max" :min="data4.min" :step="data4.step" label="G" hide-details class="ma-4">
						<template v-slot:append>
							<v-text-field v-model="data4.green" type="number" :max="data4.max" :min="data4.min" :step="data4.step" style="width: 100px" density="compact" hide-details variant="outlined"></v-text-field>
						</template>
					</v-slider>
					<v-slider v-model="data4.blue" :max="data4.max" :min="data4.min" :step="data4.step" label="B" hide-details class="ma-4">
						<template v-slot:append>
							<v-text-field v-model="data4.blue" type="number" :max="data4.max" :min="data4.min" :step="data4.step" style="width: 100px" density="compact" hide-details variant="outlined"></v-text-field>
						</template>
					</v-slider>
				</v-card-text>
			</v-card>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-range-slider</div>
			<v-range-slider v-model="range5" :min="min5" :max="max5" thumb-label="always" :thumb-size="24"></v-range-slider>
		</v-container>


		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
