<script setup lang="ts">
const radioGroup1 = ref<string>("12");
const radioGroup2 = ref<string>("");
const radioGroup3 = ref<string>("Bing");

</script>

<template>
	<v-main>
		<v-container>
			<div>v-radio-group / v-radio : 縦</div>
			<v-radio-group v-model="radioGroup1" column>
				<v-radio label="項目11" value="11"></v-radio>
				<v-radio label="項目12" value="12"></v-radio>
				<v-radio label="項目13" value="13"></v-radio>
			</v-radio-group>
			値： {{ radioGroup1 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-radio-group / v-radio : 横</div>
			<v-radio-group v-model="radioGroup2" inline>
				<v-radio label="項目21" value="21"></v-radio>
				<v-radio label="項目22" value="22"></v-radio>
				<v-radio label="項目23" value="23"></v-radio>
			</v-radio-group>
			値： {{ radioGroup2 }}
		</v-container>
		<v-divider></v-divider>
		<v-container fluid>
			<div>v-radio-group / v-radio : slot</div>
			<v-radio-group v-model="radioGroup3">
				<template v-slot:label>
					<div>Your favourite <strong>search engine</strong></div>
				</template>
				<v-radio value="Google">
					<template v-slot:label>
						<div>Of course it's <strong class="text-success">Google</strong></div>
					</template>
				</v-radio>
				<v-radio value="Bing">
					<template v-slot:label>
						<div>Definitely <strong class="text-primary">Bing</strong></div>
					</template>
				</v-radio>
				<v-radio value="Yahoo!">
					<template v-slot:label>
						<div>I think <strong class="text-warning">Yahoo!</strong></div>
					</template>
				</v-radio>
			</v-radio-group>
			値： {{ radioGroup3 }}
		</v-container>


		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
