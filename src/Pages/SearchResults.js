import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Results = () => {
	const [results, setResults] = useState([])
	let params = useParams()
	// let searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${params.searchWord}`

	const fetchData = async (word) => {
		await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((res) => {
				console.log(res)
				return res.json()
			})
			.then((data) => {
				console.log(data) // [{}]
				setResults(data[0])
			})
	}

	useEffect(() => {
		fetchData(params.searchWord)
	}, [params.searchWord])

	//console.log(params.searchWord) // Dynamic value

	return (
		<div>
			<h3>Result</h3>
		</div>
	)
}

export default Results
