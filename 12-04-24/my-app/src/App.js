import React, { useState } from "react";
import ItemList from "./ItemList";

function App() {
	const [items, setItems] = useState(["Task 1", "Task 2", "Task 3"]);
	const [newItem, setNewItem] = useState("");

	const addItem = () => {
		if (newItem.trim() !== "") {
			setItems([...items, newItem]);
			setNewItem("");
		}
	};

	return (
		<div>
			<h1>My Tasks</h1>
			<ItemList items={items}></ItemList>
			<input
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				placeholder="Add new task"
			/>
			<button onClick={addItem}>Add Task</button>
		</div>
	);
}

export default App;
