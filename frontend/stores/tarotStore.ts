import { defineStore } from 'pinia'

interface TarotCard {
	name: string
	description: string
	image: string
}

export const useTarotStore = defineStore('tarot', {
	state: () => ({
		selectedCards: [] as TarotCard[],
		history: [] as TarotCard[],
	}),
	actions: {
		drawCards(cards: TarotCard[]) {
			this.selectedCards = cards
			this.history = [...cards, ...this.history]
		},
		clearSelectedCards() {
			this.selectedCards = []
		},
	},
})
