import { Route, Routes } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import SearchHistory from "./SearchHistory"
import Results from "./SearchResults"

const Pages = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search/:searchWord" element={<Results />} />
				<Route path="/history" element={<SearchHistory />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default Pages
