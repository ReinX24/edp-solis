import React from "react";

/** Function that returns a list of items */
function ItemList({ items }) {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

export default ItemList;
