$(document).ready(function () {
	function fetchStudentData() {
		$.ajax({
			type: "GET",
			url: "https://finalproject.site/api/v1/students",
			// crossDomain: true,
			dataType: "json",
			success: function (response) {

				$("#studentTable").hide();
				// console.log(response);
				// Adding the elements to our page
				response.forEach((responseItem) => {
					console.log(responseItem);
					const newRow = document.createElement("tr");

					const id = document.createElement("td");
					id.textContent = responseItem.id;

					newRow.append(id);

					const firstName = document.createElement("td");
					firstName.textContent = responseItem.fname;

					newRow.append(firstName);

					const lastName = document.createElement("td");
					lastName.textContent = responseItem.lname;

					newRow.append(lastName);

					const gender = document.createElement("td");
					gender.textContent = responseItem.gender;

					newRow.append(gender);

					const email = document.createElement("td");
					email.textContent = responseItem.email;

					newRow.append(email);

					const studentNumber = document.createElement("td");
					studentNumber.textContent = responseItem.student_number;

					newRow.append(studentNumber);

					const section = document.createElement("td");
					section.textContent = responseItem.section;

					newRow.append(section);

					const yearLevel = document.createElement("td");
					yearLevel.textContent = responseItem.year_level;

					newRow.append(yearLevel);

					const address = document.createElement("td");
					address.textContent = responseItem.address;

					newRow.append(address);

					const city = document.createElement("td");
					city.textContent = responseItem.city;

					newRow.append(city);

					const contactNumber = document.createElement("td");
					contactNumber.textContent = responseItem.contact_number;

					newRow.append(contactNumber);

					const postalCode = document.createElement("td");
					postalCode.textContent = responseItem.postal_code;

					newRow.append(postalCode);

					const state = document.createElement("td");
					state.textContent = responseItem.state;

					newRow.append(state);

					const operationsData = document.createElement("td");
					const operationsContainer = document.createElement("div");
					operationsContainer.className =
						"d-flex justify-content-center gap-2";

					const editBtn = document.createElement("a");
					editBtn.className = "btn btn-secondary";
					editBtn.textContent = "Edit";
					editBtn.href = "student_edit.html?id=" + responseItem.id;

					operationsContainer.append(editBtn);

					const deleteBtn = document.createElement("a");
					deleteBtn.className = "btn btn-danger";
					deleteBtn.textContent = "Delete";
					deleteBtn.href =
						"student_delete.html?id=" + responseItem.id;

					operationsContainer.append(deleteBtn);

					operationsData.append(operationsContainer);

					newRow.append(operationsData);

					$("#studentTable").append(newRow).fadeIn(1000);
				});
			},
		});
	}

	$("#submitStudentBtn").click(function (e) {
		e.preventDefault();

		// Get all variables from page
		const firstName = $("#firstName").val();
		const lastName = $("#lastName").val();
		const email = $("#email").val();
		const gender = $("#gender").val();
		const studentNumber = $("#studentNumber").val();
		const section = $("#section").val();
		const yearLevel = $("#yearLevel").val();
		const address = $("#address").val();
		const city = $("#city").val();
		const contactNumber = $("#contactNumber").val();
		const postalCode = $("#postalCode").val();
		const state = $("#state").val();

		const studentData = {
			fname: firstName,
			lname: lastName,
			email: email,
			student_number: studentNumber,
			section: section,
			year_level: yearLevel,
			gender: gender,
			contact_number: contactNumber,
			address: address,
			city: city,
			state: state,
			postal_code: postalCode,
		};

		console.log(studentData);

		// Add data to endpoint
		$.ajax({
			type: "POST",
			url: "https://finalproject.site/api/v1/students",
			data: studentData,
			dataType: "json",
			success: function (response) {
				$("#studentTable").html("");
				// alert("Successfully added student!");
				$("#addStudentModal").modal("toggle");
				$("#addSuccessModal").modal("toggle");
				fetchStudentData();
			},
			error: function (e) {
				alert("An error has occurred!");
			},
		});
	});

	fetchStudentData();
});
