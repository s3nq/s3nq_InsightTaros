<template>
	<div class="app">
		<h1 class="app__title">Гадание на Таро</h1>
		<CardList />
	</div>
</template>

<script setup lang="ts">
import CardList from '~/components/organisms/InCardList.vue'
</script>

<style lang="scss" scoped>
.app {
	padding: 2rem;
	&__title {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 2rem;
	}
}
</style>
