<script setup lang="ts">
const selected1 = ref<string[]>([]);

const selected2 = ref<string[]>([
	'red', 'indigo', 'orange', 'primary', 'secondary', 'success',
	'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3',
]);

const checkbox31 = ref<boolean>(true);
const checkbox32 = ref<boolean>(false);

const checkbox4 = ref<boolean>(false);

const includeFiles5 = ref<boolean>(true);
const enabled5 = ref<boolean>(false);
</script>

<template>
	<v-main>
		<v-container fluid>
			<div>v-checkbox : 縦（デフォルト）</div>
			<v-checkbox v-model="selected1" value="11" label="項目11"></v-checkbox>
			<v-checkbox v-model="selected1" value="12" label="項目12" color="red"></v-checkbox>
			<v-checkbox v-model="selected1" value="13" label="項目13" color="blue"></v-checkbox>
			値： {{ selected1 }}
		</v-container>
		<v-divider></v-divider>
		<v-container fluid>
			<div>v-checkbox : color</div>
			<v-row>
				<v-col cols="12" sm="4" md="4">
					<v-checkbox v-model="selected2" label="red" color="red" value="red" hide-details></v-checkbox>
					<v-checkbox v-model="selected2" label="red-darken-3" color="red-darken-3" value="red-darken-3" hide-details></v-checkbox>
				</v-col>
				<v-col cols="12" sm="4" md="4">
					<v-checkbox v-model="selected2" label="indigo" color="indigo" value="indigo" hide-details></v-checkbox>
					<v-checkbox v-model="selected2" label="indigo-darken-3" color="indigo-darken-3" value="indigo-darken-3" hide-details></v-checkbox>
				</v-col>
				<v-col cols="12" sm="4" md="4">
					<v-checkbox v-model="selected2" label="orange" color="orange" value="orange" hide-details></v-checkbox>
					<v-checkbox v-model="selected2" label="orange-darken-3" color="orange-darken-3" value="orange-darken-3" hide-details></v-checkbox>
				</v-col>
			</v-row>
			<v-row class="mt-12">
				<v-col cols="12" sm="4" md="4">
					<v-checkbox v-model="selected2" label="primary" color="primary" value="primary" hide-details></v-checkbox>
					<v-checkbox v-model="selected2" label="secondary" color="secondary" value="secondary" hide-details></v-checkbox>
				</v-col>
				<v-col cols="12" sm="4" md="4">
					<v-checkbox v-model="selected2" label="success" color="success" value="success" hide-details></v-checkbox>
					<v-checkbox v-model="selected2" label="info" color="info" value="info" hide-details></v-checkbox>
				</v-col>
				<v-col cols="12" sm="4" md="4">
					<v-checkbox v-model="selected2" label="warning" color="warning" value="warning" hide-details></v-checkbox>
					<v-checkbox v-model="selected2" label="error" color="error" value="error" hide-details></v-checkbox>
				</v-col>
			</v-row>
			値： {{ selected2 }}
		</v-container>
		<v-divider></v-divider>
		<v-container fluid>
			<div>v-checkbox : Model as boolean</div>
			<v-checkbox v-model="checkbox31" :label="`Checkbox 1: ${checkbox31.toString()}`"></v-checkbox>
			<v-checkbox v-model="checkbox32" :label="`Checkbox 2: ${checkbox32.toString()}`"></v-checkbox>
		</v-container>
		<v-divider></v-divider>
		<v-container fluid>
			<div>v-checkbox : Label slot</div>
			<v-checkbox v-model="checkbox4">
				<template v-slot:label>
					<div>
						I agree that
						<v-tooltip location="bottom">
							<template v-slot:activator="{ props }">
								<a target="_blank" href="https://vuetifyjs.com" v-bind="props" @click.stop>Vuetify</a>
							</template>
							Opens in new window
						</v-tooltip>
						is awesome
					</div>
				</template>
			</v-checkbox>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-checkbox : Inline text-field</div>
			<v-card>
				<v-card-text>
					<div class="d-flex pa-4">
						<v-checkbox-btn v-model="includeFiles5" class="pe-2"></v-checkbox-btn>
						<v-text-field label="Include files" hide-details></v-text-field>
					</div>
					<div class="d-flex pa-4">
						<v-checkbox-btn v-model="enabled5" class="pe-2"></v-checkbox-btn>
						<v-text-field :disabled="!enabled5" hide-details label="I only work if you check the box"></v-text-field>
					</div>
				</v-card-text>
			</v-card>
		</v-container>

		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
