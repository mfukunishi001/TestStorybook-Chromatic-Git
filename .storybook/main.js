/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const AutoImport = require("unplugin-auto-import/vite");
const AutoImportComponents = require("unplugin-vue-components/vite");
const vuetify = require('vite-plugin-vuetify');	// 追加：Vuetify3

const config = {
	stories: [
		// Sample
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		// 追加：TailwindCSS =====>>>>>
		// "../components/**/stories/*.stories.mdx",
		"../components/**/stories/*.stories.@(js|jsx|ts|tsx)",
		// "../layouts/**/stories/*.stories.mdx",
		// "../layouts/**/stories/*.stories.@(js|jsx|ts|tsx)",
		// "../pages/**/stories/*.stories.mdx",
		// "../pages/**/stories/*.stories.@(js|jsx|ts|tsx)",
		// 追加：TailwindCSS <<<<<=====
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: '@storybook/addon-styling',
			options: {
				// Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
				// For more details on this addon's options.
				// postCss: true,	// 【起動時に警告】Vite には PostCSS サポートが事前に設定されています。
			},
		},	// 追加：TailwindCSS
	],
	framework: {
		name: "@storybook/vue3-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	viteFinal: async (config) => {
		if (config.plugins !== undefined) {
			config.plugins.push(
				AutoImport({
					imports: ["vue"],
					dirs: [
						"composables",
					],
					dts: ".storybook/auto-imports.d.ts",
				})
			);
		}
		config.plugins.push(
			AutoImportComponents({
				dirs: [
					"components",
					"layouts",
					"pages",
				],
				directoryAsNamespace: true, // trueの場合ディレクトリ名もコンポーネント名に含む
				dts: ".storybook/components.d.ts",
			})
		);
		// config.plugins = [...config.plugins, vuetify()];	// 追加：Vuetify3
		config.plugins.push(vuetify());	// 追加：Vuetify3
		return {
			...config,
			define: {
				...config.define,
				global: "window",
			},
		};
	},
};
export default config;
