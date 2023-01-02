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
