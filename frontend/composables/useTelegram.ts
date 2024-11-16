// composables/useTelegram.ts

import { onMounted, ref } from 'vue'

export function useTelegram() {
	const tg = ref<any>(null)

	onMounted(() => {
		if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
			tg.value = (window as any).Telegram.WebApp
			tg.value.ready()
		}
	})

	return { tg }
}
