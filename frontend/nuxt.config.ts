export default defineNuxtConfig({
	css: ['@/assets/styles/main.scss'],
	modules: ['@pinia/nuxt'],
	imports: {
		dirs: ['stores'], // автоматический импорт всех Pinia стор из папки stores
	},
})
