$(document).ready(function () {
	// Getting the data from the api
	$.ajax({
		type: "GET",
		url: "https://finalproject.site/api/v1/users",
        crossDomain: true,
		dataType: "json",
		success: function (response) {
			console.log(response);
		},
        // TODO: ask sir lanto for bearer token
		headers: {
			// Authorization: "Bearer YOUR_ACCESS_TOKEN",
		},
	});

	// Listening if any data is added to the api
	$("#submit-form-btn").click(function (e) {
		e.preventDefault();

		const userData = {
			name: $("#name").val(),
			email: $("#email").val(),
		};

		$.ajax({
			type: "POST",
			url: "https://finalproject.site/api/v1/users",
			data: JSON.stringify(userData),
			dataType: "jsonp",
			success: function (response) {
				console.log(response);
			},
		});
	});
});
