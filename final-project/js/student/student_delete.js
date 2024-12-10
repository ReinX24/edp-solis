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

			$("#address").val(response.address);
			$("#city").val(response.city);
			$("#contactNumber").val(response.contact_number);
			$("#postalCode").val(response.postal_code);
			$("#state").val(response.state);

			$("#studentForm").fadeIn(1000);
		},
	});

	$("#deleteStudentBtn").click(function (e) {
		e.preventDefault();

		$.ajax({
			type: "DELETE",
			url:
				"https://finalproject.site/api/v1/students/" +
				urlParams.get("id"),
			success: function (response) {
				alert("Successfully deleted student!");

				window.location.href = "/final-project/student/student.html";
			},
		});
	});
});
