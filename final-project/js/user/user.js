$(document).ready(function () {
	// Getting the data from the api
	function fetchUserData() {
		$.ajax({
			type: "GET",
			url: "https://finalproject.site/api/v1/users",
			dataType: "json",
			success: function (response) {
				$("#usersTableBody").hide();

				response.forEach((user) => {
					// console.log(user);
					const newRow = document.createElement("tr");

					const id = document.createElement("th");
					id.textContent = user.id;

					newRow.append(id);

					const firstName = document.createElement("td");
					firstName.textContent = user.fname;

					newRow.append(firstName);

					const lastName = document.createElement("td");
					lastName.textContent = user.lname;

					newRow.append(lastName);

					const email = document.createElement("td");
					email.textContent = user.email;

					newRow.append(email);

					const phoneNumber = document.createElement("td");
					phoneNumber.textContent = user.phone_number;

					newRow.append(phoneNumber);

					const address = document.createElement("td");
					address.textContent = user.address;

					newRow.append(address);

					const city = document.createElement("td");
					city.textContent = user.city;

					newRow.append(city);

					const state = document.createElement("td");
					state.textContent = user.state;

					newRow.append(state);

					const postalCode = document.createElement("td");
					postalCode.textContent = user.postal_code;

					newRow.append(postalCode);

					const operationsData = document.createElement("td");
					const operationsContainer = document.createElement("div");
					operationsContainer.className =
						"d-flex justify-content-center gap-2";

					const editBtn = document.createElement("a");
					editBtn.className = "btn btn-secondary";
					editBtn.textContent = "Edit";
					editBtn.href = "user_edit.html?id=" + user.id;

					operationsContainer.append(editBtn);

					const deleteBtn = document.createElement("a");
					deleteBtn.className = "btn btn-danger";
					deleteBtn.textContent = "Delete";
					deleteBtn.id = "deleteBtn";
					deleteBtn.href = "user_delete.html?id=" + user.id;

					operationsContainer.append(deleteBtn);

					operationsData.append(operationsContainer);

					newRow.append(operationsData);

					$("#usersTableBody").append(newRow).fadeIn(1000);
				});
			},
		});
	}

	// Listening if any data is added to the api
	$("#submitUserBtn").click(function (e) {
		e.preventDefault();

		const userData = {
			fname: $("#firstName").val(),
			lname: $("#lastName").val(),
			email: $("#email").val(),
			phone_number: $("#phoneNumber").val(),
			address: $("#address").val(),
			city: $("#city").val(),
			state: $("#state").val(),
			postal_code: $("#postalCode").val(),
		};

		// console.log(userData);

		$.ajax({
			type: "POST",
			url: "https://finalproject.site/api/v1/users",
			data: userData,
			dataType: "json",
			success: function (response) {
				$("#usersTableBody").html("");
				$("#addUserModal").modal("toggle");
				$("#addSuccessModal").modal("toggle");
				// alert("Successfully added user!");
				fetchUserData();
			},
		});
	});

	fetchUserData();
});
