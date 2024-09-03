'use strict';

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const paragraph = document.getElementById('paragraph');
const feedbackContainer = document.getElementById('feedback');

const usernameLengthContainer = document.getElementById('usernameLength');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const emailError = document.getElementById('emailError');

const myForm = document.getElementById('myForm');
const submitSuccessMessage = document.getElementById('submitSuccessMessage');
const submitErrorMessage = document.getElementById('submitErrorMessage');

//* Checkpoint 1
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
	// feedbackContainer.innerHTML = `<p>Username length: ${usernameInput.value.length}</p>`;

	// Changed to selecting by container and adding text instead of HTML
	usernameLengthContainer.innerText = `Username length: ${usernameInput.value.length}`;
	usernameLengthContainer.classList.remove('hidden');
});

//* Checkpoint 2
let usernameLength = 0;
let passwordLength = 0;

// Implement basic validation using JavaScript
// Use the input, change, and blur events to validate each field as the user
// interacts with it.
usernameInput.addEventListener('input', () => {
	usernameLength = usernameInput.value.length;
});

passwordInput.addEventListener('input', () => {
	passwordLength = passwordInput.value.length;
});

// Errors show up whenever the user exits the field that they are typing on
// Listening for change events
// Change event is somewhat similar to blur events, change event used
function validateUsername() {
	// Username should at least be 5 characters long
	if (usernameLength < 5) {
		usernameError.classList.remove('hidden');
	} else {
		usernameError.classList.add('hidden');
	}
}

usernameInput.addEventListener('change', () => {
	validateUsername();
	submitSuccessMessage.classList.add('hidden');
	submitErrorMessage.classList.add('hidden');
});

function validatePassword() {
	// Passwords should at least be 8 characters long and contain both letters
	// and numbers
	// regexes check if the string has both letters AND numbers
	if (
		passwordLength < 8 ||
		!passwordInput.value.match(/^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/)
	) {
		passwordError.classList.remove('hidden');
	} else {
		passwordError.classList.add('hidden');
	}
}

passwordInput.addEventListener('change', () => {
	validatePassword();
	submitSuccessMessage.classList.add('hidden');
	submitErrorMessage.classList.add('hidden');
});

function validateEmail() {
	// Email should follow the standard email format
	if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
		emailError.classList.remove('hidden');
	} else {
		emailError.classList.add('hidden');
	}
}

emailInput.addEventListener('change', () => {
	validateEmail();
	submitSuccessMessage.classList.add('hidden');
	submitErrorMessage.classList.add('hidden');
});

// Prevent the form from being submitted if any validation fails, and provide
// specific feedback in the <div>
myForm.addEventListener('submit', (event) => {
	event.preventDefault();

	validateUsername();
	validatePassword();
	validateEmail();

	// Checks if there are shown errors and if the inputs have values
	if (
		usernameError.classList.contains('hidden') &&
		passwordError.classList.contains('hidden') &&
		emailError.classList.contains('hidden') &&
		usernameInput.value !== '' &&
		passwordInput.value !== '' &&
		emailInput.value !== ''
	) {
		submitSuccessMessage.classList.remove('hidden');
		submitErrorMessage.classList.add('hidden');
	} else {
		submitErrorMessage.classList.remove('hidden');
		submitSuccessMessage.classList.add('hidden');
	}
});

// TODO: Checkpoint 3
