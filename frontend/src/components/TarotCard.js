import { Button, Card, CardContent, Typography } from '@mui/material'
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
					src='/img/image.png'
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
					<Button
						variant='outlined'
						color='secondary'
						onClick={() => {
							const message = `Я вытащил карту "${name}": ${description}`
							if (navigator.share) {
								navigator.share({
									title: 'Моё гадание на Таро',
									text: message,
									url: window.location.href,
								})
							} else {
								alert(
									'Функция "Поделиться" не поддерживается вашим устройством.'
								)
							}
						}}
						style={{ marginTop: '10px' }}
					>
						Поделиться
					</Button>
				</CardContent>
			</Card>
		</ReactCardFlip>
	)
}

export default TarotCard
