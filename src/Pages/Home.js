import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Button from "../components/Button"

const Home = () => {
	const [word, setWord] = useState("")
	const [empty, setEmpty] = useState(false)

	const navigate = useNavigate()

	const handleChange = (e) => {
		setWord(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// const userInput = {
		//     inputWord: word,
		//     status: true
		// }
		const checkHistory = localStorage.getItem("history")
		const userInput = word.split(" ").join("")
		let wordsArray = []

		if (checkHistory) {
			wordsArray = JSON.parse(localStorage.getItem("history"))

			let filteredWord = wordsArray.filter((word) => word === userInput)
			if (filteredWord.length === 0 && userInput !== "") {
				wordsArray.push(userInput)
			}

			// if (word) {

			// }
			// console.log(word.split(" ").join(""))
			// console.log(filteredWord.length)

			localStorage.setItem("history", JSON.stringify(wordsArray))
			// console.log(wordsArray)
		} else {
			wordsArray.push(word)
			localStorage.setItem("history", JSON.stringify(wordsArray))
			// console.log(wordsArray)
		}

		setTimeout(() => setWord(""), 1500)
		// console.log(userInput === "")

		if (userInput !== "") {
			// setEmpty(false)
			navigate(`/search/${word}`)
		} else {
			setEmpty(true)
		}
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div>
					<input type="text" placeholder="Enter an English Word" value={word} onChange={handleChange} />
				</div>
			</form>
			{empty && (
				<div>
					<div className="">
						<h4 className="flow-text">No Definitions Found...</h4>
						<h4 className="flow-text">Sorry pal, we couldn't find definitions for the word you were looking for.</h4>
						<h4 className="flow-text">You can try the search again at later time or head to the web instead.</h4>
					</div>
				</div>
			)}
		</div>
	)
}

export default Home
