import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Copyright from "./components/Copyright"
import Header from "./components/Header"
import Pages from "./Pages/Pages"

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Pages />
				<Copyright />
			</BrowserRouter>
		</div>
	)
}

export default App
