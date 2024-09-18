"use strict";

// Selecting the elements needed for the project
const form = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");

// Listen for when the submit button on the form is clicked
form.addEventListener("submit", (e) => {
    // Prevent default form behavior, preventing the page from refresing
	e.preventDefault();

	// Selecting input element and creating list element
	const newTaskInput = document.querySelector("#taskInput");
	const newTaskEl = document.createElement("li");

	// Checking if the input is empty
    if (newTaskInput.value === "") {
        alert("No Task Added!");
        return; // terminates the script
    }

	// Adding text content and class to new li element
	newTaskEl.textContent = newTaskInput.value;
	newTaskEl.classList = "list-group-item";

	// Resetting the value of the input
	newTaskInput.value = "";

	// Adding the new li element to the ul on our page
	taskList.appendChild(newTaskEl);
});
