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
	$("#deleteMovieBtn").click(function (e) {
		e.preventDefault();

		$.ajax({
			type: "DELETE",
			url:
				"https://finalproject.site/api/v1/movies/" +
				urlParams.get("id"),
			dataType: "json",
			success: function (response) {
				alert("Successfully deleted movie!");

				// Redirect to movie index page
				window.location.href = "/final-project/movie/movie.html";
			},
		});
	});
});
