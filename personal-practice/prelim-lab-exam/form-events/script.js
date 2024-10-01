"use strict";

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("Form submitted!");
});

document.querySelector("form").addEventListener("reset", (e) => {
	console.log("Form reset!");
});

// Ran when the input is moved out of focus
document.querySelector("input").addEventListener("change", (e) => {
	console.log("Input value has changed to: " + e.target.value);
});

document.querySelector("input").addEventListener("input", (e) => {
	console.log("Input value has changed to: " + e.target.value);
});

document.querySelector("input").addEventListener("focus", (e) => {
	e.target.style.backgroundColor = "grey";
	console.log("Input field focused!");
});

document.querySelector("input").addEventListener("blur", (e) => {
	e.target.style.backgroundColor = "white";
	console.log("Input field lost focus!");
});

document.querySelector("input").addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		console.log("Enter key pressed in input field!");
	}
});

document.querySelector("body").addEventListener("keyup", (e) => {
	console.log("Key released: " + e.code);
});

document.querySelector("body").addEventListener("keypress", (e) => {
	console.log("Key pressed: " + e.code);
});