//* AJAX GET method
// https://jsonplaceholder.typicode.com/posts
$("#ajax-get").click(function () {
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/posts",
		method: "GET",
		success: function (response) {
			console.log(response);
		},
		error: function (xhr, textStatus, errorText) {
            console.log(xhr, textStatus, errorText);
		},
	});
});

//* AJAX POST method
// https://jsonplaceholder.typicode.com/posts
