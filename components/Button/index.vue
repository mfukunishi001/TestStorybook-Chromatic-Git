<script setup lang="ts">
// import { toRefs } from "vue";

type ButtonColor = "green" | "red";
interface Props {
	color?: ButtonColor;
}
const props = withDefaults(defineProps<Props>(), {
	color: undefined,
});
const { color } = toRefs(props);
</script>

<template>
	<div style="border: 1px dotted black;">
		<div style="text-align: right;">components/Button/index.vue</div>

		<button v-bind="$attrs" class="tw-px-4 tw-py-2 tw-rounded-lg tw-transition-colors" :class="{
			'tw-text-white tw-bg-green-500 hover:tw-bg-green-700': color === 'green',
			'tw-text-white tw-bg-red-500 hover:tw-bg-red-700': color === 'red',
			'tw-text-black tw-bg-gray-200 hover:tw-bg-gray-400': !color,
		}">
			<slot></slot>
		</button>
	</div>
</template>
