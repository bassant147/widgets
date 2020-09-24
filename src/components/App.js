import React, { useState } from "react";
import Route from "./Route";
import Accordion from "./Accordion";
import Search from "./Search";
import Translate from "./Translate";
import Dropdown from "./Dropdown";
import Header from "./Header";

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
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Choose a Color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};

export default App;
