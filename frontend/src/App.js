// src/App.js

import React from 'react'
import './App.css'
import CardList from './components/CardList'
import { useTelegram } from './hooks/useTelegram'

function App() {
	useTelegram()

	return (
		<div className='App'>
			<h1>Гадание на Таро</h1>
			<CardList />
		</div>
	)
}

export default App
