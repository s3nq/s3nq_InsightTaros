// src/hooks/useTelegram.js

import { useEffect } from 'react'

export function useTelegram() {
	const tg = window.Telegram?.WebApp

	useEffect(() => {
		if (tg) {
			tg.ready()
		}
	}, [tg])

	return tg
}
