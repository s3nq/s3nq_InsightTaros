// frontend/src/components/TarotCard.js

import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

function TarotCard({ name, description, image }) {
	const [isFlipped, setIsFlipped] = useState(false)

	const handleClick = () => {
		setIsFlipped(!isFlipped)
	}

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
			{/* Front Side */}
			<Card onClick={handleClick} style={{ cursor: 'pointer' }}>
				<img
					src='/images/back.jpg'
					alt='Back of card'
					style={{ width: '100%' }}
				/>
			</Card>

			{/* Back Side */}
			<Card onClick={handleClick} style={{ cursor: 'pointer' }}>
				<img src={image} alt={name} style={{ width: '100%' }} />
				<CardContent>
					<Typography variant='h5'>{name}</Typography>
					<Typography variant='body2'>{description}</Typography>
				</CardContent>
			</Card>
		</ReactCardFlip>
	)
}

export default TarotCard
