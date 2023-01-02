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
						<div key={i + 1}>
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
							{result.meanings !== undefined && <div>{result.meanings[0].partOfSpeech}</div>}
							{result.meanings !== undefined && (
								<div>
									<div>
										<h4>
											<em>definitions</em>
										</h4>
									</div>
									{result.meanings[0].definitions.map((definition, i) => {
										return (
											<div key={i + 1}>
												<div>
													<em>{i + 1}.</em>
													<h6>{definition.definition}</h6>
												</div>
												<br />
											</div>
										)
									})}
								</div>
							)}
						</div>
					)
				})}
		</div>
	)
}

export default Results

// {meaningsOne.meanings !== undefined && <div className="myclass">{meaningsOne.meanings[0].partOfSpeech}</div>}
// 							{meaningsOne.meanings !== undefined && <div className="myclass">{meaningsOne.meanings[0].partOfSpeech}</div>}

// 							{meaningsOne !== undefined &&
// 								meaningsOne.meanings !== undefined &&
// 								meaningsOne.meanings.map((meaning, i) => {
// 									return (
// 										<div key={i + 1}>
// 											<h3 class="flow-text">Part of speech: {meaning.partOfSpeech}</h3>
// 										</div>
// 									)
// 								})}
// 							{meaningsTwo !== undefined &&
// 								meaningsTwo.meanings !== undefined &&
// 								meaningsTwo.meanings.map((meaning, i) => {
// 									return (
// 										<div key={i + 1}>
// 											<h3 class="flow-text">Part of speech: {meaning.partOfSpeech}</h3>
// 										</div>
// 									)
// 								})}
