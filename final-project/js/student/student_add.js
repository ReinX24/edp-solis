$(document).ready(function () {
	// Listen for submit event
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
			gender: gender,
			email: email,
			student_number: studentNumber,
			section: section,
			year_level: yearLevel,
			address: address,
			city: city,
			contact_number: contactNumber,
			postal_code: postalCode,
			state: state,
		};

		console.log(studentData);

		// TODO: validate fields

		// Add data to endpoint
		$.ajax({
			type: "POST",
			url: "https://finalproject.site/api/v1/students",
			data: studentData,
			dataType: "json",
			success: function (response) {
				alert("Successfully added student!");
				// Redirect to products index page
				window.location.href = "/final-project/product/product.html";
			},
			error: function (e) {
				console.log(e);
			},
		});
	});
});
