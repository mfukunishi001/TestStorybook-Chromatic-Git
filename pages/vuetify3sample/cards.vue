<template>
	<v-main>
		<v-container>
			<div class="text-h6 mt-2">v-card</div>
			<v-card color="black" max-width="500px" variant="outlined">
				<v-card-title>v-card の特徴 </v-card-title>
				<v-card-subtitle>お仕着せのスタイル付き v-sheet と考えればOK</v-card-subtitle>
				<v-divider></v-divider>
				<v-card-text>
					色や影、角などのスタイルは variant か props, color で指定することで、
					一括して自動で設定されます。class で設定することも可能ですが、
					指定内容によっては variant / props の設定が優先されることがあります。
				</v-card-text>
				<v-card-text>
					スタイルがお仕着せなので、v-card-text 内のテキストや
					v-card-action 内のボタンなどのスタイル（色、位置、寄せ）を
					class を使って変更しようとしても、反映されないことがあります。
				</v-card-text>
				<v-card-text>
					自力でスタイルを指定する場合は、v-sheet を使います。
					おまかせスタイルで良い場合は v-card を使うと便利です。
				</v-card-text>
				<v-card-actions>
					<v-btn>OK</v-btn>
					<v-btn>Cancel</v-btn>
				</v-card-actions>
				<v-divider thickness="5"></v-divider>
				<div class="text-body text-blue-darken-4 mx-6 mt-3">
					<p>
						div を使えば文字色やサイズ、マージンなども自由に変更できます。
						v-card-actions の外に v-btn を置けば、ボタンの色や寄せ方向も指定できます。
					</p>
					<p class="mt-3">
						ただ、それでも v-btn のスタイルは v-card のスタイル依存になるようです。
						全部自分で指定したいなら v-sheet を使うほうが良いでしょう。
					</p>
				</div>
				<div class="d-flex flex-row justify-end text-black">
					<v-btn>右寄せボタンの例</v-btn>
				</div>
			</v-card>
		</v-container>
	</v-main>
</template>
