// import react components or needed files for displaying the navbar for the full front end of the react project
import React from 'react';
import { Link } from 'react-router-dom';

// these are the needed components for the navbar for the react app
function Navbar() {
	return (
		// creating a navbar with home button, how to start and scoreboard
		<nav className="navbar sticky-top navbar-dark bg-dark">
			<Link className="nav-item text-white" to="home">
				Home
			</Link>
			<Link className="nav-item text-white" to="games">
				Games
			</Link>
			<Link className="nav-item text-white" to="/">
				<h1>Game Meet! </h1>
			</Link>
			<ModalLogin />
			<ModalCreateAccount />
		</nav>
	);
}
