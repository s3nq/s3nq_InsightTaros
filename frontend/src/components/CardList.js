// src/components/CardList.js

import {
	Button,
	ButtonGroup,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import tarotCards from '../data/tarotCards'
import TarotCard from './TarotCard'

function CardList() {
	const [selectedCards, setSelectedCards] = useState([])
	const [numCards, setNumCards] = useState(1)
	const [history, setHistory] = useState([])

	const drawCards = () => {
		const shuffledCards = [...tarotCards].sort(() => 0.5 - Math.random())
		const drawnCards = shuffledCards.slice(0, numCards)
		setSelectedCards(drawnCards)
		setHistory([...drawnCards, ...history])
	}

	return (
		<div>
			<FormControl sx={{ minWidth: 120, marginBottom: '20px' }}>
				<InputLabel id='num-cards-label'>Количество карт</InputLabel>
				<Select
					labelId='num-cards-label'
					value={numCards}
					label='Количество карт'
					onChange={e => setNumCards(e.target.value)}
				>
					{[1, 3, 5].map(num => (
						<MenuItem value={num} key={num}>
							{num}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<Button
				variant='contained'
				color='primary'
				onClick={drawCards}
				sx={{ marginBottom: '20px', display: 'block' }}
			>
				Вытянуть {numCards} {numCards === 1 ? 'карту' : 'карты'}
			</Button>

			{selectedCards.length > 0 && (
				<div>
					<Typography variant='h5' gutterBottom>
						Ваши карты:
					</Typography>
					<Grid container spacing={2} justifyContent='center'>
						{selectedCards.map((card, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<TarotCard {...card} />
							</Grid>
						))}
					</Grid>

					<ButtonGroup variant='contained' sx={{ marginTop: '10px' }}>
						<Button
							color='secondary'
							onClick={() => {
								const message = selectedCards
									.map(card => `"${card.name}": ${card.description}`)
									.join('\n')
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
						>
							Поделиться
						</Button>
						<Button color='secondary' onClick={() => setSelectedCards([])}>
							Очистить
						</Button>
					</ButtonGroup>
				</div>
			)}

			{history.length > 0 && (
				<div>
					<Typography variant='h6' gutterBottom sx={{ marginTop: '20px' }}>
						История вытянутых карт:
					</Typography>
					<Grid container spacing={2}>
						{history.map((card, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<TarotCard {...card} small />
							</Grid>
						))}
					</Grid>
				</div>
			)}
		</div>
	)
}

export default CardList
