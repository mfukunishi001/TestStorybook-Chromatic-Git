// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';	// 追加：Vuetify3

export default defineNuxtConfig({
	devtools: { enabled: true },
	// ssr: false,	// レンダリングモード: true:SSR(Server Side Rendering), false:CSR(Client Side Rendering)
	pages: true,	// 追加：pagesフォルダの有効化
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },	// 追加：ページを移動する際にアニメーションを設定
		// pageTransition: false,	// 追加：上記の無効化
		head: {
			title: 'Vuetify3 on Nuxt3',
			meta: [{ name: 'description', content: 'Nuxt3 & Vuetify3 for beginners' }],
			link: [{ rel: 'icon', href: '/icon.ico' }],
		},
	},	// 追加：全てのページのデフォルトの設定
	modules: [
		'@nuxtjs/tailwindcss',	// 追加：TailwindCSS
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},	// 追加：TailwindCSS
	build: {
		transpile: ['vuetify'],
	},	// 追加：Vuetify3
	hooks: {
		'vite:extendConfig': (config) => {
			config.plugins!.push(vuetify())
		},
	},	// 追加：Vuetify3
	vite: {
		ssr: {
			noExternal: ['vuetify'],
		},
		define: {
			'process.env.DEBUG': false,
		},
		server: {
			proxy: {	// CORS対策：リバースプロキシ設定 =====>>>>>
				// @nuxtjs/proxyをNUXT3で使いたかったけど不要でした - https://zenn.dev/upopon/articles/80b6baac7ccca4
				// サーバオプション | Vite - https://ja.vitejs.dev/config/server-options.html#server-proxy
				// オプションを使用: /api/rest/～ -> http://10.14.50.75:8080/rest/～
				'/api': {
					target: 'http://10.14.50.75:8080',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
				// オプションを使用: /mnedix/rest/～ -> http://10.14.50.75:8080/rest/～
				'/mnedix': {
					target: 'http://10.14.50.75:8080',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/mnedix/, ''),
				},
				// オプションを使用: /kong/List/～ -> http://10.14.50.75:8000/List/～
				'/kong': {
					target: 'http://10.14.50.75:8000',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/kong/, ''),
				},
				// 下記はサンプル
				// // 文字列のショートハンド: http://localhost:5173/foo -> http://localhost:4567/foo
				// '/foo': 'http://localhost:4567',
				// // オプションを使用: http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
				// '/api': {
				// 	target: 'http://jsonplaceholder.typicode.com',
				// 	changeOrigin: true,
				// 	rewrite: (path) => path.replace(/^\/api/, ''),
				// },
				// // 正規表現を使用: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
				// '^/fallback/.*': {
				// 	target: 'http://jsonplaceholder.typicode.com',
				// 	changeOrigin: true,
				// 	rewrite: (path) => path.replace(/^\/fallback/, ''),
				// },
				// // プロキシインスタンスを使用
				// '/api': {
				// 	target: 'http://jsonplaceholder.typicode.com',
				// 	changeOrigin: true,
				// 	configure: (proxy, options) => {
				// 		// プロキシは 'http-proxy' のインスタンスになります
				// 	},
				// },
				// // Web ソケット か socket.io をプロキシ化: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
				// '/socket.io': {
				// 	target: 'ws://localhost:5174',
				// 	ws: true,
				// },
			},	// CORS対策：リバースプロキシ設定 <<<<<=====
		},
	},	// 追加：Vuetify3
	css: [
		"~/assets/css/style.css",
		"~/assets/css/sgh.css",	// 追加：SgH
		"~/assets/css/tailwind.css",	// 追加：TailwindCSS
		"vuetify/lib/styles/main.sass",	// 追加：Vuetify3
		"@mdi/font/css/materialdesignicons.css",	// 追加：Vuetify3(Material Design Icons)
	],
});
