/** @type { import('@storybook/vue3').Preview } */
import '../assets/css/sgh.css'	// 追加：Sgh
import '../assets/css/tailwind.css'	// 追加：TailwindCSS
// import { withThemeByDataAttribute } from '@storybook/addon-styling';

const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

// export const decorators = [
// 	withThemeByDataAttribute({
// 		themes: {
// 			light: 'light',
// 			dark: 'dark',
// 		},
// 		defaultTheme: 'light',
// 		attributeName: 'data-mode',
// 	}),
// ];

// 追加：Vuetify3 =====>>>>>
import { setup } from "@storybook/vue3";
import { createVuetify } from 'vuetify';
// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
// Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetify = createVuetify({
	components,
	directives,
	// theme: {
	// 	themes: {
	// 		light: {
	// 			colors: {
	// 				primary: '#000d6d',
	// 				background: '#333',
	// 				error: '#d63031',
	// 				info: '#0984e3',
	// 				secondary: '#EDF2F7',
	// 				success: '#00cec9',
	// 				surface: '#fff',
	// 				warning: '#2d3436',
	// 			},
	// 			dark: false,
	// 			variables: {},
	// 		},
	// 	},
	// },
});
setup((app) => {
	app.use(vuetify);
});

export const decorators = [
	(story) => ({
		components: { story },
		template: '<v-app><story /></v-app>',
		// template: '<story />',
	}),
];
// 追加：Vuetify3 <<<<<=====

export default preview;
