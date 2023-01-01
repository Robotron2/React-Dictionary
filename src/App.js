import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Pages from "./Pages/Pages"

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Pages />
			</BrowserRouter>
		</div>
	)
}

export default App
