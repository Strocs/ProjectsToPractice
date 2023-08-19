import { WINNER_COMBOS } from '../constants/constants'

export function checkWinner(gameToCheck) {

	for (let combo of WINNER_COMBOS) {
		const [a, b, c] = combo
		if (gameToCheck[a] && gameToCheck[a] === gameToCheck[b] && gameToCheck[a] === gameToCheck[c]) {
			return gameToCheck[a]
		}
	}
	return null
}
