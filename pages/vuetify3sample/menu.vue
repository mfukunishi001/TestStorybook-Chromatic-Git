<script setup lang="ts">
interface Data1 { id: unknown; value: boolean; path: unknown[]; };
const message1 = ref<unknown>(null);
function clickItem1(data1: Data1): void {
	message1.value = data1.id;
};

type Data2 = { id: unknown; value: boolean; path: unknown[]; };
const message2 = ref<unknown>(null);
function clickItem2(data2: Data2): void {
	message2.value = data2.id;
};

const message3 = ref<unknown>(null);
function clickItem3(data3: { id: unknown; value: boolean; path: unknown[]; }): void {
	message3.value = data3.id;
};
</script>

<template>
	<v-main>
		<v-container>
			<div>v-menu : Activator slot(Click to open)</div>
			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn color="primary" v-bind="props">メニューとボタン(slot)が親子関係</v-btn>
				</template>
				<v-list @click:select="clickItem1">
					<v-list-item v-for="n in 7" :value="n + 10">
						<v-list-item-title>項目{{ n + 10 }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			値： {{ message1 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-menu : Parent activator(Open on hover)</div>
			<v-btn color="secondary">
				ボタンとメニューが親子関係
				<v-menu open-on-hover activator="parent">
					<v-list>
						<v-list @click:select="clickItem2">
							<v-list-item v-for="n in 3" :value="n + 20">項目{{ n + 20 }}</v-list-item>
						</v-list>
					</v-list>
				</v-menu>
			</v-btn>
			値： {{ message2 }}
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-menu : Sibling activator(Click to open)</div>
			<v-btn id="menu-activator3" color="warning">ボタンとメニューが兄弟関係</v-btn>
			<v-menu activator="#menu-activator3">
				<v-list @click:select="clickItem3">
					<v-list-item v-for="n in 5" :value="n + 10">
						<v-list-item-title>項目{{ n + 10 }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			値： {{ message3 }}
		</v-container>


		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
