import React, { useState } from "react";
import Dropdown from "./Dropdown";

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
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			) : null}
		</div>
	);
};

export default App;
