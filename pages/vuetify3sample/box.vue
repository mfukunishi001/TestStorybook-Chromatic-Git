<template>
	<v-main>
		<v-container>
			<div class="text-h6 mt-2">共通</div>
			<span>幅(width)の指定は有効</span><br />
			<div class="text-h6 mt-2">div</div>
			<div height="200px" max-width="500px" class="bg-black rounded-lg" elevation="3">
				<span>height 指定は無視される</span><br />
				<span>max-width 指定は無視される</span><br />
				<span>デフォルトでpaddingが設定されている</span><br />
				<span>影(elevation)の指定ができない</span><br />
				<span>背景色、文字色の指定は class で行う</span><br />
				<span>角(rounded)の指定は有効</span><br />
			</div>
			<div class="text-h6 mt-2">v-container</div>
			<v-container height="200px" max-width="500px" class="bg-green-lighten-3 rounded-lg" elevation="3">
				<span>height 指定は無視される</span><br />
				<span>max-width 指定は無視される</span><br />
				<span>デフォルトでpaddingが設定されている</span><br />
				<span>影(elevation) の指定ができない</span><br />
				<span>背景色、文字色の指定は class で行う</span><br />
				<span>角(rounded)の指定は有効</span><br />
			</v-container>
			<div class="text-h6 mt-2">v-sheet</div>
			<v-sheet height="200px" max-width="500px" class="bg-red-lighten-3 rounded-lg" elevation="3">
				<span>height 指定は有効</span><br />
				<span>max-width 指定は有効</span><br />
				<span>デフォルトでpaddingが設定されていない</span><br />
				<span>影(elevation) の指定ができる</span><br />
				<span>背景色、文字色の指定は class で行う</span><br />
				<span>角(rounded)の指定は有効</span><br />
			</v-sheet>
			<div class="text-h6 mt-2">v-card</div>
			<v-card height="200px" max-width="500px" color="blue-lighten-3" tonal>
				<span>height 指定は有効</span><br />
				<span>max-width 指定は有効</span><br />
				<span>デフォルトでpaddingが設定されていない</span><br />
				<span>色の指定は <b>color</b> で行う（背景色、文字色は自動で決まる）</span><br />
				<span>影(elevation)の指定はできるが variant と競合することがある</span><br />
				<span>角(rounded)は指定はできるが variant と競合することがある</span><br />
			</v-card>
		</v-container>
	</v-main>
</template>
