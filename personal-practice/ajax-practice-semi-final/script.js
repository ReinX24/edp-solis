//* Using the load method
// $("#content").load("demo_test.html");

/*
$("button").click(function () {
	// Loads the content to the element
	$("#content").load(
		"demo_test.html",
		function (responseTxt, statusTxt, xhr) {
			console.log(xhr.status, xhr.statusText);
			if (statusTxt == "success") {
				alert("External content loaded successfully!");
			} else if (statusTxt == "error") {
				alert("Error: " + xhr.status + ": " + xhr.statusText);
			}
		}
	);
});
*/

//* GET request, returns a json file
/*
$.ajax({
	url: "https://jsonplaceholder.typicode.com/posts",
	method: "GET",
	success: function (response) {
		console.log(response);
		for (let eachResponse of response) {
            $("#titles").append("<li>" + eachResponse.title +"</li>");
		}
	},
	error: function () {
		console.log("Something went wrong!");
	},
});
*/

//* POST request, returns the data of the new object
$("button").click(function () {
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/posts",
		method: "POST",
		data: { name: "Rein", age: 20 },
		success: function (response) {
			console.log(response);
		},
		error: function () {
			console.log("Something went wrong!");
		},
	});
});
