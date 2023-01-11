const Copyright = () => {
	let currentYear = new Date().getFullYear()

	return (
		<div>
			<center>
				<div className="copyright">
					<p className="flow-text" style={{ color: "grey", fontSize: "1.2rem" }}>
						© Robotron {currentYear}
					</p>
				</div>
			</center>
		</div>
	)
}

export default Copyright
