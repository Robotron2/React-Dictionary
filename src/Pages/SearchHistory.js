import { Link } from "react-router-dom"
import { motion } from "framer-motion"
// import WordList from "../components/random"

const SearchHistory = () => {
	const searchedWords = JSON.parse(localStorage.getItem("history"))
	// console.log(searchedWords)
	// const wordList = WordList
	// console.log(wordList)

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
		<motion.div className="row " animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			{searchedWords.map((searchedWord, index) => {
				return (
					<div className="col s6 m3" key={index + 1}>
						<Link to={`/search/${searchedWord}`}>
							<div className="card-panel light-blue lighten-3 myrowclass">
								<span className="white-text">{searchedWord}</span>
							</div>
						</Link>
					</div>
				)
			})}
		</motion.div>
	)
}

export default SearchHistory
