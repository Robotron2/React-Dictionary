import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
				<Link className="navbar-brand">RoboDictionary</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link">History</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link">About App</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Header
