<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
import { useTelegram } from '@/composables/useTelegram'

const { tg } = useTelegram()
useHead({
	script: [{ src: 'https://telegram.org/js/telegram-web-app.js', defer: true }],
})
</script>
