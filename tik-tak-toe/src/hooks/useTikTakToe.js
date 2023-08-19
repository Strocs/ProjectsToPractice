import { useState } from 'react'
import { STORAGE_ID } from '../constants/constants'
import { checkWinner } from '../utils/logic'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../utils/LocalStorage'

export function useTikTakToe(initialBoard = [], players = []) {
	const TURNS = {
		X: players[0],
		O: players[1],
	}
	const [board, setBoard] = useState(() => {
		const isStoraged = getLocalStorage(STORAGE_ID.board)
		return isStoraged ? isStoraged : initialBoard
	})
	const [turn, setTurn] = useState(() => {
		const isStoraged = getLocalStorage(STORAGE_ID.turn)
		return isStoraged ? isStoraged : TURNS.X
	})
	const [winner, setWinner] = useState(getLocalStorage(STORAGE_ID.winner))

	function updateBoard(index) {
		// Evalúo si existe una jugada en el cuadrado y retorno
		if (board[index]) return
		// Actualizar el tablero con la jugada del turno activo
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		setLocalStorage(STORAGE_ID.board, newBoard)
		// Verificar si existe un ganador
		const newWinner = checkWinner(newBoard)
		setWinner(newWinner)
		setLocalStorage(STORAGE_ID.winner, newWinner)
		if (newWinner) return
		// Cambiar el turno activo o termina el juego si hay ganador o empate
		if (newBoard.every(cell => cell !== null) && newWinner === null) return setWinner(false) // es un empate
		setTurn(prevTurn => {
			const newTurn = prevTurn === TURNS.X ? TURNS.O : TURNS.X
			setLocalStorage(STORAGE_ID.turn, newTurn)
			return newTurn
		})
	}

	function resetGame() {
		setBoard(initialBoard)
		setTurn(TURNS.X)
		setWinner(null)
		removeLocalStorage([STORAGE_ID.board, STORAGE_ID.turn, STORAGE_ID.winner])
	}

	return {
		board,
		turn,
		winner,
		updateBoard,
		resetGame,
	}
}
