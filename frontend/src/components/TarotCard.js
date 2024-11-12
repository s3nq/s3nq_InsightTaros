import { Card, CardContent, Fade, Typography } from '@mui/material'
import React from 'react'

function TarotCard({ name, description, image, small }) {
	return (
		<Fade in={true} timeout={1000}>
			<Card
				sx={{
					maxWidth: small ? 150 : 345,
					margin: '0 auto',
					boxShadow: 3,
					transition: 'transform 0.3s',
					'&:hover': {
						transform: 'scale(1.05)',
					},
				}}
			>
				<img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
				{!small && (
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{name}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				)}
			</Card>
		</Fade>
	)
}

export default TarotCard
