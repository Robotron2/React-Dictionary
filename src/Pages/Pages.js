import { Route, Routes } from "react-router-dom"
import Home from "./Home"

const Pages = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default Pages
