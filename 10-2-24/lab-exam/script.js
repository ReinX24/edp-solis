"use strict";

// 1. Mouse Event
const buttonClick = document.querySelector("#click-btn");

buttonClick.addEventListener("click", () => {
	buttonClick.textContent = "Clicked!";
	buttonClick.style.backgroundColor = "red";
});

buttonClick.addEventListener("mouseover", () => {
	buttonClick.style.backgroundColor = "gray";
});

// 2. Keyboard Event
const inputField = document.querySelector("#input-fld");
const inputLength = document.querySelector("#input-length");
const enterMessage = document.querySelector("#enter-msg");

inputField.addEventListener("input", (e) => {
	inputLength.innerHTML = inputField.value.length;
});

inputField.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		enterMessage.textContent = "You pressed Enter!";
	}
});

// 3. Form Event
const nameInput = document.querySelector("#name-input");
const nameMessage = document.querySelector("#name-msg");
const nameForm = document.querySelector("#name-form");

nameInput.addEventListener("keyup", (e) => {
	nameMessage.textContent = nameInput.value;
});

nameForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (nameInput.value === "") {
		alert("Name field is required!");
	}
});
