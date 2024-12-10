$(document).ready(function () {
	$("#submitMovieBtn").click(function (e) {
		e.preventDefault();

		const newMovieData = {
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

		console.log(newMovieData);

		$.ajax({
			type: "POST",
			url: " https://finalproject.site/api/v1/movies",
			data: newMovieData,
			dataType: "json",
			success: function (response) {
				alert("Successfully added movie!");

				// Redirect to movie index page
				window.location.href = "/final-project/movie/movie.html";
			},
		});
	});
});
