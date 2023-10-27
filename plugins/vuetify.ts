// import 'vuetify/styles';
import { createVuetify } from 'vuetify';
// import { aliases, mdi } from 'vuetify/iconsets/mdi';
// import '@mdi/font/css/materialdesignicons.css';
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';

export default defineNuxtPlugin(nuxtApp => {
	// const vuetify = createVuetify({
	// 	ssr: true,
	// 	components,
	// 	directives,
	// 	// 他の設定をここに記述していく
	// });
	// // Vue.js で Vuetify を使用する
	// nuxtApp.vueApp.use(vuetify);

	// バンドルサイズを最適化
	// nuxtApp.vueApp.use(createVuetify());

	// 'vuetify/labs/components'を追加
	const vuetify = createVuetify({
		components: {
			...labsComponents,
		},
	});
	nuxtApp.vueApp.use(vuetify);

	// // 追加：Material Design Icons
	// const vuetify = createVuetify({
	// 	icons: {
	// 		defaultSet: 'mdi',
	// 		aliases,
	// 		sets: {
	// 			mdi,
	// 		},
	// 	},
	// 	// 他の設定をここに記述していく
	// });
	// nuxtApp.vueApp.use(vuetify);

});
