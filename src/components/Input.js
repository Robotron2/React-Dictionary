const Input = (props) => {
	const inpType = props.type
	const placeHolder = props.placeHolder

	return (
		<div>
			<input type={inpType} placeholder={placeHolder} />
		</div>
	)
}

export default Input
