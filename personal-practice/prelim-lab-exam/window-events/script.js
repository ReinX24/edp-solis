"use strict";

document.addEventListener("DOMContentLoaded", () => {
	console.log("Document Loaded!");
});

window.addEventListener("load", () => {
	console.log("Window Loaded!");
});

window.addEventListener("resize", () => {
	console.log(
		"Window resized to: x:" + window.innerWidth + " y:" + window.innerHeight
	);
});

window.addEventListener("scroll", () => {
	console.log("Page scrolled to: y:" + window.scrollY);
});

window.addEventListener("unload", () => {
	console.log("Page is being unloaded! (unload)");
});

window.addEventListener("beforeunload", () => {
	console.log("Page is being unloaded! (beforeunload)");
});

// window.dispatchEvent(new Event("unload")); // throws unload event
// window.dispatchEvent(new Event("beforeunload")); // throws beforeunload event

/*
try {
	throw new Error("This is an error!");
} catch (e) {
	console.log(e.name);
	console.log(e.message);
	console.log(e.stack);
}
*/
