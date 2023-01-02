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
				// [{}]
				setResults(data)
			})
	}
	// console.log(results)

	useEffect(() => {
		fetchData(params.searchWord)
	}, [params.searchWord])

	return (
		<div>
			<h1>Hello</h1>
			{results.map((result, i) => {
				return (
					<div key={i + 1}>
						<h1>{result.word}</h1>
					</div>
				)
			})}
		</div>
	)
}

export default Results
