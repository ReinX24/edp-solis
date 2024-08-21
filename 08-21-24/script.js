// Selecting the elements on the page
const mouseClick = document.querySelector("#mouse-click");
const dblMouseClick = document.querySelector("#dbl-mouse-click");
const mouseDown = document.querySelector("#mouse-down");
const mouseUp = document.querySelector("#mouse-up");
const mouseOver = document.querySelector("#mouse-over");
const mouseOut = document.querySelector("#mouse-out");
const mouseMove = document.querySelector("#mouse-move");

// Adding event listeners to the elements on the page
// mouseClick.addEventListener("click", () => {
//   alert("Fired when the user clicks an element.");
// });

mouseClick.onclick = () => {
  alert("Fired when the user clicks an element.");
};

// dblMouseClick.addEventListener("dblclick", () => {
//   alert("Fired when the user double-clicks an element.");
// });

dblMouseClick.ondblclick = () => {
  alert("Fired when the user double-clicks an element.");
};

// mouseDown.addEventListener("mousedown", () => {
//   alert("Fired when the user presses the mouse button down.");
// });

mouseDown.onmousedown = () => {
  alert("Fired when the user presses the mouse button down.");
};

// mouseUp.addEventListener("mouseup", () => {
//   alert("Fired when the user releases the mouse button.");
// });

mouseUp.onmouseup = () => {
  alert("Fired when the user releases the mouse button.");
};

// mouseOver.addEventListener("mouseover", () => {
//   alert("Fired when the user moves the mouse over an element.");
// });

mouseOver.onmouseover = () => {
  alert("Fired when the user moves the mouse over an element.");
};

// mouseOut.addEventListener("mouseout", () => {
//   alert("Fired when the user moves the mouse out of an element.");
// });

mouseOut.onmouseout = () => {
  alert("Fired when the user moves the mouse out of an element.");
};

// mouseMove.addEventListener("mousemove", () => {
//   alert("Fired when the user moves the mouse over an element.");
// });

mouseMove.onmousemove = () => {
  alert("Fired when the user moves the mouse over an element.");
};
