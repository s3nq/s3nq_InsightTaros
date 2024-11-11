import React, { useState } from 'react'
import tarotCards from '../data/tarotCards'
import TarotCard from './TarotCard'
// Импортируйте компоненты из '@mui/material'
import { Button, Typography } from '@mui/material'

function CardList() {
	const [selectedCard, setSelectedCard] = useState(null)

	const drawCard = () => {
		const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)]
		setSelectedCard(randomCard)
	}

	return (
		<div style={{ textAlign: 'center', marginTop: '20px' }}>
			{selectedCard ? (
				<TarotCard
					name={selectedCard.name}
					description={selectedCard.description}
					image={selectedCard.image}
				/>
			) : (
				<Typography variant='h6'>
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
