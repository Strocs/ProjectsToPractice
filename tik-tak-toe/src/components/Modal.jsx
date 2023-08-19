import { Reset, Square } from '.'

/* eslint-disable react/prop-types */
export function Modal({ winner, reset }) {
	if (winner === null) return
	return (
		<section className='winner'>
			<div className='text'>
				<h2> {winner ? 'The winner is:' : 'This was a draw'}</h2>
				{winner && (
					<span className='win'>
						<Square>{winner}</Square>
					</span>
				)}
				<Reset reset={reset} />
			</div>
		</section>
	)
}
