<template>
	<div class="card-list">
		<div class="card-list__controls">
			<label for="numCards" class="card-list__label">Количество карт:</label>
			<select id="numCards" v-model="numCards" class="card-list__select">
				<option v-for="num in [1, 3, 5]" :key="num" :value="num">
					{{ num }}
				</option>
			</select>
			<Button @click="drawCards">
				Вытянуть {{ numCards }} {{ numCards === 1 ? 'карту' : 'карты' }}
			</Button>
		</div>

		<div v-if="tarotStore.selectedCards.length" class="card-list__grid">
			<TarotCard
				v-for="(card, index) in tarotStore.selectedCards"
				:key="index"
				:name="card.name"
				:description="card.description"
				:image="card.image"
			/>
		</div>

		<div v-if="tarotStore.history.length" class="card-list__history">
			<h3 class="card-list__history-title">История вытянутых карт:</h3>
			<div class="card-list__grid">
				<TarotCard
					v-for="(card, index) in tarotStore.history"
					:key="index"
					:name="card.name"
					:description="card.description"
					:image="card.image"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import tarotCards from '@/data/tarotCards'
import { useTarotStore } from '@/stores/tarotStore'
import { ref } from 'vue'
import Button from '~/components/atoms/InButton.vue'
import TarotCard from '~/components/molecules/InTarotCard.vue'

const tarotStore = useTarotStore()
const numCards = ref(1)

function drawCards() {
	const shuffled = [...tarotCards].sort(() => 0.5 - Math.random())
	const drawnCards = shuffled.slice(0, numCards.value)
	tarotStore.drawCards(drawnCards)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.card-list {
	&__controls {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;

		& > *:not(:last-child) {
			margin-right: 1rem;
		}
	}

	&__label {
		font-weight: bold;
		margin-right: 0.5rem;
	}

	&__select {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	&__grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	&__history {
		margin-top: 2rem;

		&-title {
			font-size: 1.25rem;
			margin-bottom: 1rem;
			color: $primary-color;
		}
	}
}
</style>
