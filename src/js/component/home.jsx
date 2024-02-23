import React from "react";
import { Navbar_page } from "./Navbar_page.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Display } from "./display.jsx";
import { Contact } from "./contact.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
	<Navbar_page/>
	<Jumbotron/>
	<Display/>
<Contact/>
	</div>
	);
};

export default Home;

