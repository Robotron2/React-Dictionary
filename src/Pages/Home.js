import { useState } from "react"
import Button from "../components/Button"

const Home = () => {
	const [word, setWord] = useState("")
	const [checkChange, setCheckChange] = useState(false)

	const handleChange = (e) => {
		setWord(e.target.value)
		setCheckChange(true)
	}

	return (
		<div className="container">
			<div>
				<input type="text" placeholder="Enter an English Word" value={word} onChange={handleChange} />
			</div>
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
