'use strict';

const usernameInput = document.getElementById('username');
const paragraph = document.getElementById('paragraph');
const feedbackContainer = document.getElementById('feedback');

usernameInput.addEventListener('keydown', (event) => {
	console.log(`You pressed: ${event.key}`);
	paragraph.innerText += event.key;

	if (event.key === 'Enter') {
		alert(`You pressed ${event.key}`);
	}
});

usernameInput.addEventListener('keyup', (event) => {
	console.log(`You released: ${event.key}`);

	// Display characters on feedbackContainer
	feedbackContainer.innerText = `Username length: ${usernameInput.value.length}`;
});
