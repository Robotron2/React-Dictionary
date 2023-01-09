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

	const handleSubmit = async (e) => {
		e.preventDefault()
		// const userInput = {
		//     inputWord: word,
		//     status: true
		// }
		const checkHistory = localStorage.getItem("history")
		const userInput = word.split(" ").join("")
		let wordsArray = []

		await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.title !== "No Definitions Found") {
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
				}
			})

		setTimeout(() => setWord(""), 1500)
		// console.log(userInput === "")

		if (userInput !== "") {
			// setEmpty(false)
			navigate(`/search/${userInput}`)
		} else {
			setEmpty(true)
		}
		// console.log(userInput)
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
						<h4 className="flow-text">Sorry pal, we couldn't find definitions for empty strings.</h4>
						<h4 className="flow-text">You can try the search again at later time.</h4>
					</div>
				</div>
			)}
		</div>
	)
}

export default Home
