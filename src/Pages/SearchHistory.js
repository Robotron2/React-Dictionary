const SearchHistory = () => {
	const histories = JSON.parse(localStorage.getItem("history"))
	console.log(histories)

	return (
		<div>
			<h3>Search History</h3>
			{histories.map((history, index) => {
				return (
					<div key={index + 1}>
						<h3>{history}</h3>
					</div>
				)
			})}
		</div>
	)
}

export default SearchHistory
