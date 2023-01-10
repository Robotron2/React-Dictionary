import { Route, Routes, useLocation } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import SearchHistory from "./SearchHistory"
import Results from "./SearchResults"
import { AnimatePresence } from "framer-motion"

const Pages = () => {
	const location = useLocation()

	return (
		<div className="container">
			<AnimatePresence mode="wait" location={location} key={location.pathname}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search/:searchWord" element={<Results />} />
					<Route path="/history" element={<SearchHistory />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default Pages
