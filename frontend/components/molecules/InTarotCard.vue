<template>
	<div class="tarot-card">
		<img :src="image" :alt="name" class="tarot-card__image" />
		<div class="tarot-card__content">
			<h3 class="tarot-card__title">{{ name }}</h3>
			<p class="tarot-card__description">{{ description }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	name: String,
	description: String,
	image: String,
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.tarot-card {
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	background-color: #fff;
	transition: transform 0.3s;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	&__image {
		width: 100%;
		height: auto;
	}

	&__content {
		padding: 1rem;
	}

	&__title {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: $primary-color;
	}

	&__description {
		font-size: 1rem;
		color: #666;
	}
}
</style>
