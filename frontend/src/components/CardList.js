// frontend/src/components/CardList.js

import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import tarotCards from '../data/tarotCards'
import TarotCard from './TarotCard'

function CardList() {
	const [selectedCard, setSelectedCard] = useState(null)

	const drawCard = () => {
		const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)]
		setSelectedCard(randomCard)
	}

	return (
		<div>
			{selectedCard ? (
				<TarotCard {...selectedCard} />
			) : (
				<Typography variant='h6' gutterBottom>
					Нажмите кнопку, чтобы вытянуть карту
				</Typography>
			)}
			<Button
				variant='contained'
				color='primary'
				onClick={drawCard}
				style={{ marginTop: '20px' }}
			>
				Вытянуть карту
			</Button>
		</div>
	)
}

export default CardList
