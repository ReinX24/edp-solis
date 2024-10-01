"use strict";

document.addEventListener("keydown", function (event) {
	console.log(`Key Pressed: ${event.key}`);

	if (event.key === "Enter") {
		console.log("Enter key was pressed!");
	}
});

document.addEventListener("keyup", function (event) {
	console.log(`Key Released: ${event.key}`);
});
