import React from "react";
import Accordion from "./Accordion";

const App = () => {
	const items = [
		{ title: "What's your name?", content: "michael corleone" },
		{ title: "what do you do?", content: "i'm in the mafia" },
		{ title: "anything else?", content: "i have some oranges for you" }
	];
	return (
		<div>
			<Accordion items={items}/>
		</div>
	);
};

export default App;
