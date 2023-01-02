import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
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
	// console.log(results[0].meanings[0].synonyms.length)

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
								<h1 className="blue-text lighten-1">
									{result.word}
									<span>
										<em>{`${i + 1}  `}</em>
									</span>
								</h1>
							</div>

							{result.phonetic !== undefined && (
								<div className="myclass">
									<p>{result.phonetic}</p>
								</div>
							)}

							{result.phonetic === undefined && (
								<div className="myclass">
									<p>{result.phonetics.text}</p>
								</div>
							)}

							{result.meanings !== undefined && <div>{result.meanings[0].partOfSpeech}</div>}
							{result.meanings !== undefined && (
								<div className="flow-text">
									<div>
										<h4>
											<em>definition(s)</em>
										</h4>
									</div>
									{result.meanings[0].definitions.map((definition, i) => {
										return (
											<div key={i + 1}>
												<div>
													<h6 style={{ margin: "1.1rem" }}>
														<strong>{i + 1}. </strong>
														{definition.definition}
													</h6>
												</div>
											</div>
										)
									})}
								</div>
							)}
							{result.meanings !== undefined && result.meanings[1] !== undefined && (
								<div className="flow-text">
									<div>
										<h4>
											<em>more....</em>
										</h4>
									</div>
									{result.meanings[1].definitions.map((definition, i) => {
										return (
											<div key={i + 1}>
												<div>
													<h6 style={{ margin: "1.1rem" }}>
														<strong>{i + 1}. </strong>
														{definition.definition}
													</h6>
												</div>
											</div>
										)
									})}
								</div>
							)}
							{result.meanings[0].synonyms !== undefined && result.meanings[0].synonyms.length !== 0 && (
								<div className="flow-text">
									<div>
										<h4>
											<em>Synonyms(s)</em>
										</h4>
									</div>
									{result.meanings[0].synonyms.map((synonym, i) => {
										return (
											<div key={i + 1}>
												<div>
													<h6 style={{ margin: "1.1rem" }}>
														<strong>{i + 1}. </strong>
														{synonym}
													</h6>
												</div>
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
