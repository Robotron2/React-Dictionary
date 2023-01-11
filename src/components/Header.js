import { Link, useNavigate } from "react-router-dom"
import WordList from "./random"

const Header = () => {
	const navigate = useNavigate()
	const wordList = WordList

	function handleClick() {
		let randomWordIndex = Math.floor(Math.random() * 1952)
		console.log(randomWordIndex)
		console.log(wordList[randomWordIndex])
		let randomWord = wordList[randomWordIndex]

		navigate(`/search/${randomWord}`)
	}

	return (
		<div>
			<header>
				<nav className="light-blue lighten-1" role="navigation">
					<div className="nav-wrapper container">
						<Link id="logo-container" className="brand-logo" to={"/"}>
							RoboDict
						</Link>
						<ul className="right hide-on-med-and-down">
							<li onClick={handleClick}>
								<Link>Word of the Day </Link>
							</li>
							<li>
								<Link to={"/history"}>History </Link>
							</li>
							<li>
								<Link to={"/about"}> About </Link>
							</li>
							<li>
								<Link> Contact </Link>
							</li>
						</ul>
						<div className="sidenav" id="nav-mobile">
							<ul className="pt-3">
								<li onClick={handleClick}>
									<Link>Word of the Day </Link>
								</li>
								<li>
									<Link to={"/history"}>History </Link>
								</li>
								<li>
									<Link to={"/about"}> About </Link>
								</li>
								<li>
									<Link> Contact </Link>
								</li>
							</ul>
						</div>

						<Link data-target="nav-mobile" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</Link>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header
