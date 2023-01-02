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

	let [meaningsOne, meaningsTwo, meaningsThree, meaningsFour] = results
	console.log(meaningsOne)
	console.log(meaningsTwo)

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

							{/* {meaningsOne.meanings !== undefined && <div className="myclass">{meaningsOne.meanings[0].partOfSpeech}</div>}
							{meaningsOne.meanings !== undefined && <div className="myclass">{meaningsOne.meanings[0].partOfSpeech}</div>} */}

							{meaningsOne.meanings &&
								meaningsOne.meanings.map((meaning, i) => {
									return (
										<div key={i + 1}>
											<h3 class="flow-text">Part of speech: {meaning.partOfSpeech}</h3>
										</div>
									)
								})}
						</div>
					)
				})}
		</div>
	)
}

export default Results
