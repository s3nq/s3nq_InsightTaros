// frontend/src/App.js

import { Container, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import './App.css'
import CardList from './components/CardList'
import { useTelegram } from './hooks/useTelegram'

function App() {
	useTelegram()

	const theme = createTheme({
		palette: {
			primary: {
				main: '#6b5b95', // Выберите цветовую палитру на ваш вкус
			},
			secondary: {
				main: '#feb236',
			},
		},
		typography: {
			fontFamily: 'Roboto, sans-serif',
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Container
				maxWidth='sm'
				style={{ textAlign: 'center', marginTop: '20px' }}
			>
				<Typography variant='h4' gutterBottom>
					Гадание на Таро
				</Typography>
				<CardList />
			</Container>
		</ThemeProvider>
	)
}

export default App
