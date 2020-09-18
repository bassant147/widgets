import React from "react";
import Search from './Search';


const App = () => {
	const items = [
		{ title: "What's your name?", content: "michael corleone" },
		{ title: "what do you do?", content: "i'm in the mafia" },
		{ title: "anything else?", content: "i have some oranges for you" }
	];
	return (
		<div>
			<Search />
		</div>
	);
};

export default App;
