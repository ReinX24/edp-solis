$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: " https://finalproject.site/api/v1/movies",
		dataType: "json",
		success: function (response) {
			response.forEach((movie) => {
				console.log(movie);
				const newRow = document.createElement("tr");

				const id = document.createElement("th");
				id.textContent = movie.id;

				newRow.append(id);

				const title = document.createElement("td");
				title.textContent = movie.title;

				newRow.append(title);

				const description = document.createElement("td");
				description.textContent = movie.description;

				newRow.append(description);

				const director = document.createElement("td");
				director.textContent = movie.director;

				newRow.append(director);

				const releaseDate = document.createElement("td");
				releaseDate.textContent = movie.release_date;

				newRow.append(releaseDate);

				const duration = document.createElement("td");
				duration.textContent = movie.duration;

				newRow.append(duration);

				const genre = document.createElement("td");
				genre.textContent = movie.genre;

				newRow.append(genre);

				const rating = document.createElement("td");
				rating.textContent = movie.rating;

				newRow.append(rating);

				const language = document.createElement("td");
				language.textContent = movie.language;

				newRow.append(language);

				const country = document.createElement("td");
				country.textContent = movie.country;

				newRow.append(country);

				const cast = document.createElement("td");
				cast.textContent = movie.cast;

				newRow.append(cast);

				const operationsData = document.createElement("td");
				const operationsContainer = document.createElement("div");
				operationsContainer.className =
					"d-flex justify-content-center gap-2";

				const editBtn = document.createElement("a");
				editBtn.className = "btn btn-secondary";
				editBtn.textContent = "Edit";
				editBtn.href = "movie_edit.html?id=" + movie.id;

				operationsContainer.append(editBtn);

				const deleteBtn = document.createElement("a");
				deleteBtn.className = "btn btn-danger";
				deleteBtn.textContent = "Delete";
				deleteBtn.id = "deleteBtn";
				deleteBtn.href = "movie_delete.html?id=" + movie.id;

				operationsContainer.append(deleteBtn);

				operationsData.append(operationsContainer);

				newRow.append(operationsData);

				$("#productsTableBody").append(newRow);
			});
		},
	});

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
				// TODO: replace with a modal
				alert("Successfully added movie!");

				// TODO: refetch data instead of refeshing page
				// Redirect to movie index page
				window.location.href = "/final-project/movie/movie.html";
			},
		});
	});
});
