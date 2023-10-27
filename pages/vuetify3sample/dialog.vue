<script setup lang="ts">
const dialog1 = ref<boolean>(false);
const dialog2 = ref<boolean>(false);
const dialog3 = ref<boolean>(false);
const dialog4 = ref<boolean>(false);
const dialog5 = ref<boolean>(false);
const dialog61 = ref<boolean>(false);
const dialog62 = ref<boolean>(false);
const dialog63 = ref<boolean>(false);
</script>

<template>
	<v-main>
		<v-container>
			<div>v-dialog : Activator (特定の要素によってアクティブ化されるようには見えて、画面の中央に表示)</div>
			<v-btn color="primary">
				Open Dialog
				<v-dialog v-model="dialog1" activator="parent" width="auto">
					<v-card>
						<v-card-text>
							dialog message!! dialog message!! dialog message!!
						</v-card-text>
						<v-card-actions>
							<v-btn color="secondary" block @click="dialog1 = false">Close Dialog</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-btn>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<div>v-dialog : v-model (特定の要素によってアクティブ化されるようには見えず、単に画面の中央に表示)</div>
			<v-btn color="error" @click="dialog2 = true">Open Dialog</v-btn>
			<v-dialog v-model="dialog2" width="auto">
				<v-card>
					<v-card-text>
						dialog message!! dialog message!! dialog message!!
					</v-card-text>
					<v-card-actions>
						<v-btn color="success" block @click="dialog2 = false">Close Dialog</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<v-row>
				<v-col cols="6">
					<v-container>
						<div>v-dialog : Fullscreen (全画面ダイアログを表示)</div>
						<v-dialog v-model="dialog3" fullscreen :scrim="false" transition="dialog-bottom-transition">
							<template v-slot:activator="{ props }">
								<v-btn color="success" v-bind="props">Open Dialog</v-btn>
							</template>
							<v-card>
								<v-toolbar color="warning">
									<v-btn icon="mdi-close" @click="dialog3 = false"></v-btn>
									<v-toolbar-title>Toolbar</v-toolbar-title>
								</v-toolbar>
								<v-card-text>
									<p>dialog message!! dialog message!! dialog message!!</p>
									<p>dialog message!! dialog message!! dialog message!!</p>
								</v-card-text>
							</v-card>
						</v-dialog>
					</v-container>
				</v-col>
				<v-col cols="6">
					<v-container>
						<div>v-dialog : Persistent (永続的なダイアログを表示)</div>
						<v-dialog v-model="dialog4" persistent width="auto">
							<template v-slot:activator="{ props }">
								<v-btn color="primary" v-bind="props">Open Dialog</v-btn>
							</template>
							<v-card>
								<v-card-title class="text-h5">永続的なダイアログ</v-card-title>
								<v-card-text>永続的なダイアログは、外側に触れたり、esc キーを押したりしても閉じられません。選択してください</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="green-darken-1" variant="text" @click="dialog4 = false">いいえ</v-btn>
									<v-btn color="green-darken-1" variant="text" @click="dialog4 = false">はい</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-container>
				</v-col>
				<v-col cols="6">
					<v-container>
						<div>v-dialog : Form (ダイアログ内のフォームの簡単な例)</div>
						<v-dialog v-model="dialog5" persistent width="1024">
							<template v-slot:activator="{ props }">
								<v-btn color="primary" v-bind="props">Open Dialog</v-btn>
							</template>
							<v-card>
								<v-card-title><span class="text-h5">User Profile</span></v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12" sm="6" md="4">
												<v-text-field label="Legal first name*" required></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint required></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field label="Email*" required></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field label="Password*" type="password" required></v-text-field>
											</v-col>
											<v-col cols="12" sm="6">
												<v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
											</v-col>
											<v-col cols="12" sm="6">
												<v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding']" label="Interests" multiple></v-autocomplete>
											</v-col>
										</v-row>
									</v-container>
									<small>*indicates required field</small>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="blue-darken-1" variant="text" @click="dialog5 = false">Close</v-btn>
									<v-btn color="blue-darken-1" variant="text" @click="dialog5 = false">Save</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-container>
				</v-col>
				<v-col cols="6">
					<v-container>
						<div>v-dialog : Nesting (ダイアログの入れ子)</div>
						<v-btn color="primary" class="ma-2" @click="dialog61 = true">Open Dialog 1</v-btn>
						<v-dialog v-model="dialog61" width="auto">
							<v-card>
								<v-card-title>Dialog 1</v-card-title>
								<v-card-text>
									<v-btn color="primary" class="ma-2" @click="dialog62 = true">Open Dialog 2</v-btn>
								</v-card-text>
								<v-card-actions>
									<v-btn color="primary" variant="text" @click="dialog61 = false">Close</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
						<v-dialog v-model="dialog62" width="auto">
							<v-card>
								<v-card-title>Dialog 2</v-card-title>
								<v-card-text>
									<v-btn color="primary" @click="dialog63 = !dialog63">Open Dialog 3</v-btn>
								</v-card-text>
								<v-card-actions>
									<v-btn color="primary" variant="text" @click="dialog62 = false">Close</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
						<v-dialog v-model="dialog63" width="auto">
							<v-card>
								<v-card-title><span>Dialog 3</span></v-card-title>
								<v-card-actions>
									<v-btn color="primary" variant="text" @click="dialog63 = false">Close</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-container>
				</v-col>
			</v-row>
		</v-container>

		<v-divider></v-divider>
		<v-container>
			<v-row>
				<v-col cols="6">
					<v-container>
						<div>v-tooltip : Location (表示場所)</div>
						<v-btn class="ma-2" color="primary">
							左 <v-tooltip activator="parent" location="start">Start Tooltip</v-tooltip>
						</v-btn>
						<v-btn class="ma-2" color="secondary">
							右 <v-tooltip activator="parent" location="end">End Tooltip</v-tooltip>
						</v-btn>
						<v-btn class="ma-2" color="accent">
							上 <v-tooltip activator="parent" location="top">Top Tooltip</v-tooltip>
						</v-btn>
						<v-btn class="ma-2" color="error">
							下 <v-tooltip activator="parent" location="bottom">Bottom Tooltip</v-tooltip>
						</v-btn>
					</v-container>
				</v-col>
				<v-col cols="6">
					<v-container>
						<div>v-tooltip : 文章</div>
						<div class="mx-2">
							文章のどこを触ってもヒントが出ます。
							<v-tooltip activator="parent" location="bottom">ヒントの表示(上)</v-tooltip>
						</div>
						<div class="mx-2">
							文章の途中でも
							<span class="text-red">
								ヒントを出す<v-tooltip activator="parent" location="bottom">ヒントの表示(左)</v-tooltip>
							</span>
							ことができます。
						</div>
					</v-container>
				</v-col>
			</v-row>
		</v-container>



		<v-divider></v-divider>
		<v-container>
			<div></div>
		</v-container>
	</v-main>
</template>
