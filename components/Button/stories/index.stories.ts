import Button from "../index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: "Button/Component",
	component: Button,
	render: (args) => ({
		components: { Button },
		tags: ["autodocs"],	// docsが不要だったら削除してOK
		setup() {
			return { args };
		},
		template: /* HTML */`
			<Button v-bind="args">参考ボタン</Button>
			<v-main><v-btn v-bind="args">Vuetifyボタン</v-btn></v-main>
			`,
	}),
	argTypes: {
		color: {
			control: {
				type: "inline-radio",
			},
			options: ["green", "red", undefined],
		},
	},
};

export const Component: Story = {
	args: {
		color: "green",
	},
};

export default meta;
