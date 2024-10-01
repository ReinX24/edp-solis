"use strict";

document.querySelector("#mouse-click").addEventListener("click", () => {
	alert("Clicked!");
});

document.querySelector("#dbl-mouse-click").addEventListener("dblclick", () => {
	alert("Double Click!");
});

document.querySelector("#mouse-down").addEventListener("mousedown", () => {
	alert("Mouse Down!");
});

document.querySelector("#mouse-up").addEventListener("mouseup", () => {
	alert("Mouse Up!");
});

document.querySelector("#mouse-over").addEventListener("mouseover", () => {
	alert("Mouse Over!");
});

document.querySelector("#mouse-out").addEventListener("mouseout", () => {
	alert("Mouse Out!");
});

document.querySelector("#mouse-move").addEventListener("mousemove", () => {
	alert("Mouse Move!");
});
