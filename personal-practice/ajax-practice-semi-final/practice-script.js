//* AJAX GET method
// https://jsonplaceholder.typicode.com/posts
// xhr: XMLHttpRequest
$("#ajax-get").click(function () {
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/posts",
		method: "GET",
		success: function (response) {
			console.log(response);
		},
		error: function (xhr, statusText, errorText) {
			console.log(xhr, statusText, errorText);
		},
	});
});

//* AJAX POST method
// https://jsonplaceholder.typicode.com/posts
$("#ajax-post").click(function () {
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/posts",
		method: "POST",
		data: {
			name: "Rein",
			age: 21,
		},
		success: function (response) {
			console.log(response);
		},
		error: function (xhr, responseText, errorText) {
			console.log(xhr, responseText, errorText);
		},
	});
});

//* LOAD GET method
// https://jsonplaceholder.typicode.com/posts
$("#load-get").click(function () {
	$("#content").load(
		"https://jsonplaceholder.typicode.com/posts",
		function (response) {
			// Returns a JSON object, so we have to parse the data
			console.log(JSON.parse(response));
		}
	);
});

//* LOAD POST method
// https://jsonplaceholder.typicode.com/posts
$("#load-post").click(function () {
	$("#content").load(
		"https://jsonplaceholder.typicode.com/posts",
		{ name: "Rein", age: 21 },
		function (response) {
			console.log(JSON.parse(response));
		}
	);
});
