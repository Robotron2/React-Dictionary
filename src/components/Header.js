import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div>
			<header>
				<nav className="light-blue lighten-1" role="navigation">
					<div className="nav-wrapper container">
						<Link id="logo-container" className="brand-logo">
							RoboDict
						</Link>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to={"/history"}>History </Link>
							</li>
							<li>
								<Link>History About Contact </Link>
							</li>
							<li>
								<Link>History About Contact </Link>
							</li>
						</ul>
						<div className="sidenav" id="nav-mobile">
							<ul className="pt-3">
								<li>
									<Link>History About Contact </Link>
								</li>
								<li>
									<Link>History About Contact </Link>
								</li>
								<li>
									<Link>History About Contact </Link>
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
