"use strict";

$(document).ready(function () {
	$("#btn-event").click(function () {
		const paragraphEl = $("#text-content");
		const effect = $("#effect-select").val(); // getting the selected animation
		const duration = Number($("#duration").val());
		const textAreaContent = $("#content").val();

		// Setting text content if there is text in the text area
		if (textAreaContent !== "") {
			paragraphEl.text(textAreaContent);
		}

		// Adding effects with duration
		if (effect === "fadeIn") {
			paragraphEl.fadeIn(duration);
		} else if (effect === "fadeOut") {
			// If the element is already faded out, alert the user and terminate script
			if (paragraphEl.css("display") === "none") {
				alert("The element is already hidden");
				return;
			}
			paragraphEl.fadeOut(duration); 
		} else if (effect === "slideUp") {
			paragraphEl.slideUp(duration);
		} else if (effect === "slideDown") {
			paragraphEl.slideDown(duration);
		}
	});
});
