import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Results from "./SearchResults"

const Pages = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search/:searchWord" element={<Results />} />
			</Routes>
		</div>
	)
}

export default Pages
