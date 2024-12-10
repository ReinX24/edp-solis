$(document).ready(function () {

	$("#studentForm").hide();

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	$.ajax({
		type: "GET",
		url: "https://finalproject.site/api/v1/students/" + urlParams.get("id"),
		crossDomain: true,
		dataType: "json",
		success: function (response) {
			$("#firstName").val(response.fname);
			$("#lastName").val(response.lname);
			$("#email").val(response.email);
			$("#gender").val(response.gender);
			$("#studentNumber").val(response.student_number);
			$("#section").val(response.section);
			$("#yearLevel").val(response.year_level);

			$(`select option[value='${response.year_level}']`).attr(
				"selected",
				"selected"
			);
			// document.getElementById("yearLevel").options.selectedIndex = response.year_level;

			$("#address").val(response.address);
			$("#city").val(response.city);
			$("#contactNumber").val(response.contact_number);
			$("#postalCode").val(response.postal_code);
			$("#state").val(response.state);

			$("#studentForm").fadeIn(1000);
		},
	});

	$("#updateStudentBtn").click(function (e) {
		e.preventDefault();

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

		// console.log(studentData);

		$.ajax({
			type: "PUT",
			url:
				"https://finalproject.site/api/v1/students/" +
				urlParams.get("id"),
			data: studentData,
			dataType: "json",
			success: function (response) {
				alert("Successfully updated student!");
				// Redirect to products index page
				window.location.href = "/final-project/student/student.html";
			},
			error: function (e) {
				alert("An error has occurred!");
			},
		});
	});
});
