/* eslint-disable react/prop-types */
import { Square } from '.'

export function Game({ board, updateBoard }) {
	return (
		<>
			<section className='game'>
				{board.map((square, index) => {
					return (
						<Square key={index} index={index} onClick={updateBoard}>
							{square}
						</Square>
					)
				})}
			</section>
		</>
	)
}
