$(document).ready(function () {
	$("#img-1").click(function (e) {
		$("#show-image")
			.hide()
			.attr("src", "img-1.png")
			.css("opacity", 0)
			.slideDown("slow")
			.animate({ opacity: 1 }, { queue: false, duration: "slow" });
	});

	$("#img-2").click(function (e) {
		$("#show-image")
			.hide()
			.attr("src", "img-2.jpg")
			.css("opacity", 0)
			.slideDown("slow")
			.animate({ opacity: 1 }, { queue: false, duration: "slow" });
	});
});
