<template>
	<v-main>
		<v-container>
			<div class="d-flex">
				<v-container class="bg-blue-lighten-4 mx-2">
					<v-btn width="200px" class="my-2">width=100px のボタン</v-btn>
					<v-btn width="20em" class="my-2">width=20em のボタン</v-btn>
					<v-btn width="20rem" class="my-2">width=20rem のボタン</v-btn>
					<v-btn height="10ex" class="my-2">height=10ex のボタン</v-btn>
					<v-btn height="40px" class="my-2">height=40px のボタン</v-btn>
					<v-btn width="25em" height="10em" class="my-2">width=30em, height=10em のボタン</v-btn>
					<v-divider thickness="5"></v-divider>
					<p>v-divider の縦幅は thickness で指定する。</p>
					<v-divider thickness="5" width="50%"></v-divider>
					<p>v-divider の横幅は width で指定する。</p>
					<div class="d-flex bg-white mt-3">
						<v-img class="mx-auto my-3" src="https://iconape.com/wp-content/files/no/113101/png/vuetify.png" height="100"></v-img>
						<v-img class="mx-auto my-3" src="https://iconape.com/wp-content/files/no/113101/png/vuetify.png" height="100" cover></v-img>
					</div>
					<p>
						v-img は cover を指定するか否かによって、サイズの指定が同じでも表示の
						され方（リサイズされるか、クロップされるか）が変わります。
					</p>
				</v-container>
				<v-container class="bg-red-lighten-4 mx-2">
					<v-btn min-width="400px" class="my-2">min-width=400px のボタン</v-btn>
					<p>
						min-width を指定すると、ブラウザの横幅が小さい方向へリサイズされた
						ときでも、その幅以下にはならない。親要素や画面からはみでるようになる。
					</p>
					<v-sheet width="300px" class="bg-red-lighten-5 my-4">
						<v-text-field label="text field" hide-details="auto"></v-text-field>
					</v-sheet>
					<p>
						v-text-field のように width が指定できない要素は、v-sheet などの
						中に置いて、親要素側で width を指定する。
					</p>
					<v-list class="overflow-y-auto my-3" max-height="20ex" min-height="10ex">
						<v-list-item v-for="k in 2" :key="k">
							item {{ k }}
						</v-list-item>
					</v-list>
					<v-list class="overflow-y-auto my-3" max-height="20ex" min-height="10ex">
						<v-list-item v-for="k in 5" :key="k">
							item {{ k }}
						</v-list-item>
					</v-list>
					<p>v-list のように、中に含む要素が可変の場合は max-height、min-height
						を指定することで、要素数が少ないときは高さを小さくしつつ、
						要素数が増えたときでも高さに上限を付けることができる。
					</p>
				</v-container>
			</div>
		</v-container>
	</v-main>
</template>
