const Button = (props) => {
	return (
		<div>
			<button className={props.class}>{props.name}</button>
		</div>
	)
}

export default Button
