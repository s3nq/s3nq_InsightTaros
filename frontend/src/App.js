import { Container, CssBaseline, Paper, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CardList from './components/CardList'
function App() {
	const theme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#ff9800',
			},
			secondary: {
				main: '#f44336',
			},
			background: {
				default: '#121212',
				paper: '#1e1e1e',
			},
		},
		typography: {
			fontFamily: 'Montserrat, sans-serif',
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper
				style={{
					minHeight: '100vh',
					backgroundImage: 'url(/images/background.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					padding: '20px',
				}}
			>
				<Container maxWidth='md' style={{ textAlign: 'center' }}>
					<Typography variant='h4' gutterBottom style={{ color: '#fff' }}>
						Гадание на Таро
					</Typography>
					<CardList />
				</Container>
			</Paper>
		</ThemeProvider>
	)
}

export default App
