<script setup lang="ts">
const count = ref(0);
function addCount(): void {
	count.value++;
};
</script>

<template>
	<div style="border: 1px dotted green;">
		<div style="text-align: right;">pages/index.vue</div>
		<NuxtLayout>
			<h1>Main Page</h1>

			<h3>Vuetify3</h3>
			count: {{ count }}
			<v-btn class="ma-2" icon="mdi-numeric-positive-1" @click="addCount"></v-btn>
			<br>
			<div class="text-center">
				<div>
					<v-btn class="ma-2" color="primary">
						color="primary"
						<v-icon icon="mdi-plus-circle-outline"></v-icon>
					</v-btn>
					<v-btn class="ma-2" color="secondary">
						color="secondary"
						<v-icon icon="mdi-account"></v-icon>
					</v-btn>
					<v-btn class="ma-2" color="accent">color="accent"</v-btn>
					<v-btn class="ma-2" color="error">color="error"</v-btn>
				</div>
				<div>
					<v-btn class="ma-2" color="warning">color="warning"</v-btn>
					<v-btn class="ma-2" color="info">color="info"</v-btn>
					<v-btn class="ma-2" color="success">color="success"</v-btn>
					[<v-icon icon="mdi-home" />]icon="mdi-home"
				</div>
				<div>
					<v-btn class="ma-2" color="primary">
						Accept
						<v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
					</v-btn>
					<v-btn class="ma-2" color="red">
						Decline
						<v-icon end icon="mdi-cancel"></v-icon>
					</v-btn>
					<v-btn class="ma-2">
						<v-icon start icon="mdi-minus-circle"></v-icon>
						Cancel
					</v-btn>
					<v-btn class="ma-2" color="orange-darken-2">
						<v-icon start icon="mdi-arrow-left"></v-icon>
						Back
					</v-btn>
				</div>
				<div>
					<v-btn class="ma-2" color="accent" prepend-icon="mdi-check-circle" append-icon="mdi-account-circle">
						前後にアイコン
					</v-btn>
					<v-btn class="ma-2" color="accent" prepend-icon="mdi-check-circle" append-icon="mdi-account-circle">
						<template v-slot:prepend>
							<v-icon color="success"></v-icon>
						</template>
						前後に色指定アイコン
						<template v-slot:append>
							<v-icon color="warning"></v-icon>
						</template>
					</v-btn>
				</div>
				<div>
					<v-btn class="ma-2" color="purple" icon="mdi-wrench"></v-btn>
					<v-btn class="ma-2" color="indigo" icon="mdi-cloud-upload"></v-btn>
					<v-btn class="ma-2" variant="text" icon="mdi-thumb-up" color="blue-lighten-2"></v-btn>
					<v-btn class="ma-2" variant="text" icon="mdi-thumb-down" color="red-lighten-2"></v-btn>
				</div>
			</div>

			<br><br>
			<h3>TailwindCSS</h3>
			<Button type="button" color="red">ボタン [color="red"]</Button>
			<Button type="reset" color="green">ボタン [color="green"]</Button>
		</NuxtLayout>
	</div>
</template>
