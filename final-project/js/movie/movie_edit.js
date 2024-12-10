$(document).ready(function () {
	//* Get the URL parameters
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	$.ajax({
		type: "GET",
		url: " https://finalproject.site/api/v1/movies/" + urlParams.get("id"),
		dataType: "json",
		success: function (movie) {
			$("#title").val(movie.title);
			$("#description").val(movie.description);
			$("#director").val(movie.director);
			$("#releaseDate").val(movie.release_date);
			$("#duration").val(movie.duration);
			$("#genre").val(movie.genre);
			$("#rating").val(movie.rating);
			$("#language").val(movie.language);
			$("#country").val(movie.country);
			$("#cast").val(movie.cast);
		},
	});

	// Listening for update button
	$("#updateMovieBtn").click(function (e) {
		e.preventDefault();

		const updatedMovieData = {
			title: $("#title").val(),
			description: $("#description").val(),
			director: $("#director").val(),
			release_date: $("#releaseDate").val(),
			duration: $("#duration").val(),
			genre: $("#genre").val(),
			rating: $("#rating").val(),
			language: $("#language").val(),
			country: $("#country").val(),
			cast: $("#cast").val(),
		};

		console.log(updatedMovieData);

		$.ajax({
			type: "PUT",
			url:
				"https://finalproject.site/api/v1/movies/" +
				urlParams.get("id"),
			data: updatedMovieData,
			dataType: "json",
			success: function (response) {
				alert("Successfully updated movie!");

				// Redirect to movie index page
				window.location.href = "/final-project/movie/movie.html";
			},
		});
	});
});
