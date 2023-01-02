import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

const Home = () => {
	const [word, setWord] = useState("")
	const [checkChange, setCheckChange] = useState(false)
	const navigate = useNavigate()

	const handleChange = (e) => {
		setWord(e.target.value)
		setCheckChange(true)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate(`search/${word}`)
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div>
					<input type="text" placeholder="Enter an English Word" value={word} onChange={handleChange} />
				</div>
			</form>
			<div>
				<Button class="btn waves-effect wave-light btn-large light-blue lighten-1" name="Search" />
			</div>

			{!checkChange && (
				<center>
					<h3 className="flow-text">Type something in the input box.</h3>
				</center>
			)}
		</div>
	)
}

export default Home
