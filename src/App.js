import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Pages from "./Pages/Pages"
import { motion } from "framer-motion"

function App() {
	return (
		<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<BrowserRouter>
				<Header />
				<Pages />
			</BrowserRouter>
		</motion.div>
	)
}

export default App
