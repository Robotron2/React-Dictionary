import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Button from "../components/Button"

const Home = () => {
	const [word, setWord] = useState("")

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
		const userInput = word
		let wordsArray = []

		if (checkHistory) {
			wordsArray = JSON.parse(localStorage.getItem("history"))

			let filteredWord = wordsArray.filter((word) => word === userInput)
			if (filteredWord.length === 0) {
				wordsArray.push(userInput)
			}
			// console.log(filteredWord.length)

			localStorage.setItem("history", JSON.stringify(wordsArray))
			// console.log(wordsArray)
		} else {
			wordsArray.push(word)
			localStorage.setItem("history", JSON.stringify(wordsArray))
			console.log(wordsArray)
		}

		setTimeout(() => setWord(""), 1500)
		navigate(`/search/${word}`)
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div>
					<input type="text" placeholder="Enter an English Word" value={word} onChange={handleChange} />
				</div>
			</form>
			{/* <div>
				<Button class="btn waves-effect wave-light btn-large light-blue lighten-1" name="Search" />
			</div> */}
		</div>
	)
}

export default Home
