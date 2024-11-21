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
// URL: https://jsonplaceholder.typicode.com/posts (GET REQUEST)
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

// Using the load function to get data
/*
$("#content").load(
	"https://jsonplaceholder.typicode.com/posts",
	function (result) {
		for (let eachResult of JSON.parse(result)) {
			console.log(eachResult.title);
		}
	}
);
*/

// Using the load function to post data
$("#content").load(
	"https://jsonplaceholder.typicode.com/posts",
	{
		name: "Rein",
	},
	function (result) {
		console.log(result);
	}
);

//* POST request, returns the data of the new object
// URL: https://jsonplaceholder.typicode.com/posts (POST REQUEST)
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
