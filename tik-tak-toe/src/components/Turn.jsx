/* eslint-disable react/prop-types */
import { PLAYERS } from '../constants/constants'
import { Square } from '.'

export function Turn({ turn }) {
	return (
		<section className='turn'>
			{PLAYERS.map((player, index) => (
				<Square key={player} turn={turn === PLAYERS[index]}>
					{PLAYERS[index]}
				</Square>
			))}
		</section>
	)
}
