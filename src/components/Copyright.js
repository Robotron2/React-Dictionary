const Copyright = () => {
	let currentYear = new Date().getFullYear()

	return (
		<div>
			<div className="copyright">
				<p className="flow-text" style={{ color: "grey", fontSize: "1.2rem" }}>
					© {currentYear} Robotron
				</p>
			</div>
		</div>
	)
}

export default Copyright
