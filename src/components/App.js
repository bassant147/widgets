import React, { useState } from "react";
import Translate from './Translate';

const items = [
	{ title: "What's your name?", content: "michael corleone" },
	{ title: "what do you do?", content: "i'm in the mafia" },
	{ title: "anything else?", content: "i have some oranges for you" },
];

const options = [
	{ label: "shade of red", value: "red" },
	{ label: "shade of green", value: "green" },
	{ label: "shade of blue", value: "blue" },
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Translate />
		</div>
	);
};

export default App;
