import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"

const Results = () => {
	const [results, setResults] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	// const [checkResponse, setCheckResponse] = useState(true)
	let params = useParams()
	// let searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${params.searchWord}`

	const fetchData = async (word) => {
		await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				// [{}]
				setResults(data)
				setIsLoading(false)
			})
	}
	// console.log(results)

	useEffect(() => {
		fetchData(params.searchWord)
	}, [params.searchWord])

	return (
		<div>
			{isLoading && <Loading />}

			{!isLoading &&
				results.map((result, i) => {
					return (
						<div>
							<div className="myclass">
								<h1 class="blue-text lighten-1">
									{result.word}
									<span>
										<em>{i + 1}</em>
									</span>
								</h1>
							</div>

							{result.phonetic !== undefined && <div className="myclass">{result.phonetic}</div>}
							{result.phonetic === undefined && <div className="myclass">{result.phonetics[1].text}</div>}
						</div>
					)
				})}
		</div>
	)
}

export default Results
