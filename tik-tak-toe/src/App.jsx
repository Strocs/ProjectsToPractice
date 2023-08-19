import './App.css'
import { Game, Reset, Turn, Modal } from './components'
import { DEFAULT_BOARD, PLAYERS } from './constants/constants'
import { useTikTakToe } from './hooks/useTikTakToe'

function App() {
	const { board, turn, winner, updateBoard, resetGame } = useTikTakToe(DEFAULT_BOARD, PLAYERS)
	return (
		<>
			<header className='board'>
				<h1>Tik Tak Toe</h1>
				<Reset reset={resetGame} />
			</header>
			<main className='board'>
				<Game board={board} updateBoard={updateBoard} />
				<Modal winner={winner} reset={resetGame} />
			</main>
			<footer className='board'>
				<Turn turn={turn} />
			</footer>
		</>
	)
}

export default App
