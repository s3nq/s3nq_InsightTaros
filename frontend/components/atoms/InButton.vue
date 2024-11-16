<template>
	<button :class="buttonClasses" @click="onClick">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
const props = defineProps({
	onClick: {
		type: Function as PropType<(event: MouseEvent) => void>,
		default: () => {},
	},
	type: {
		type: String,
		default: 'primary',
	},
})

const buttonClasses = computed(() => `button button--${props.type}`)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.button {
	padding: 0.75rem 1.5rem;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	border-radius: 4px;
	transition: background-color 0.3s, color 0.3s;

	&--primary {
		background-color: $primary-color;
		color: #fff;

		&:hover {
			background-color: darken($primary-color, 10%);
		}
	}

	&--secondary {
		background-color: #fff;
		color: $primary-color;
		border: 1px solid $primary-color;

		&:hover {
			background-color: lighten($primary-color, 40%);
		}
	}
}
</style>
