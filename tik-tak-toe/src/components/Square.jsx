/* eslint-disable react/prop-types */
export function Square({ index, children, onClick, turn }) {
	const squareStyles = `square ${turn && 'is-selected'}`

	const handleOnClick = () => {
		onClick(index)
	}

	return (
		<span onClick={handleOnClick} key={index} className={squareStyles}>
			{children}
		</span>
	)
}
