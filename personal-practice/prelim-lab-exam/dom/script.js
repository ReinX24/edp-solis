"use strict";

// childnodes
/*
const parent = document.getElementById("parent");
const childNodes = parent.childNodes;

console.log(childNodes.length);

for (let i = 0; i < childNodes.length; i++) {
	console.log(childNodes[i].nodeType); // 3 (text node), 1 (element node), 8 (comment node)
}
*/

// nextSibling and previousSibling
/*
let firstChild = document.body.firstChild;

let nextSibling = firstChild.nextSibling;

let previousSibling = nextSibling.previousSibling;

console.log(previousSibling === firstChild);
*/

// console.log(document.getElementsByClassName("heading"));
// console.log(document.getElementsByTagName("h1"));

// document.querySelector("#bubbling-form").addEventListener("click", () => {
//     alert("form");
// });

// document.querySelector("#bubbling-div").addEventListener("click", () => {
//     alert("div");
// });

// document.querySelector("#bubbling-p").addEventListener("click", () => {
//     alert("p");
// });

// const elemArr = document.querySelectorAll("*");

for (let elem of document.querySelectorAll("*")) {
	// Capturing phase
	elem.addEventListener(
		"click",
		(e) => {
			alert(elem.tagName);
		},
		true
	);

	// Bubbling phase
	elem.addEventListener("click", (e) => {
		alert(elem.tagName);
	});
}
