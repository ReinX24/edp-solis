$(document).ready(function () {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	$.ajax({
		type: "GET",
		url: "https://finalproject.site/api/v1/students/" + urlParams.get("id"),
		crossDomain: true,
		dataType: "json",
		success: function (response) {
			console.log(response);
			// Adding the elements to our page
		},
	});
});
