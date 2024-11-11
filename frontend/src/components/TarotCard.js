// Импортируйте компоненты из '@mui/material' вместо '@material-ui/core'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function TarotCard({ name, description, image }) {
	return (
		<Card>
			<img src={image} alt={name} style={{ width: '100%' }} />
			<CardContent>
				<Typography variant='h5'>{name}</Typography>
				<Typography variant='body2'>{description}</Typography>
			</CardContent>
		</Card>
	)
}

export default TarotCard
