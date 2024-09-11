"use strict";

/*
    NOTE: the usage of double quotes is important here. Replacing double quotes
    with single quotes can cause issues. Moving forward, we will be disabling 
    the automatic single quote configuration of prettier in the prettier rc file.
*/

// 1
const header = document.getElementById("header");
console.log(header);

const firstListEl = document.getElementById("list");
console.log(firstListEl.children[0]);

const secondParagraph = document.getElementsByClassName("paragraph");
console.log(secondParagraph.nextSibling);

// 2
header.textContent = "DOM Explorer: Modified!";

const listEl = document.getElementById("list");
const item4 = document.createElement("li");
item4.textContent = "Item 4";
listEl.append(item4);

const paragraph = document.querySelector(".paragraph");
paragraph.style.backgroundColor = "lightblue";

// 3
const list2 = document.querySelector("#list");
header.addEventListener("click", () => {
	list2.style.display = list2.style.display == "none" ? "block" : "none";
});

// 4
const paraParentEl = paragraph.parentElement;
console.log(paraParentEl);

const nextUlEl = document.getElementById("list").nextElementSibling;
console.log(nextUlEl);

const bodyEl = document.body;
console.log(bodyEl.firstElementChild);
