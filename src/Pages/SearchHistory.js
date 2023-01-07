const SearchHistory = () => {
	const searchedWords = JSON.parse(localStorage.getItem("history"))
	console.log(searchedWords)

	// return (
	// 	<div>
	// 		<h3>Search History</h3>
	// 		{searchedWords.map((searchedWord, index) => {
	// 			return (
	// 				<div key={index + 1}>
	// 					<h3>{searchedWord}</h3>
	// 				</div>
	// 			)
	// 		})}
	// 	</div>
	// )
	return (
		<div class="row ">
			{searchedWords.map((searchedWord, index) => {
				return (
					<div className="col s6 m3" key={index + 1}>
						<div className="card-panel light-blue lighten-3 myrowclass">
							<span className="white-text">{searchedWord}</span>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default SearchHistory
