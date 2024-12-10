$(document).ready(function () {

	$("#userForm").hide();

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	$.ajax({
		type: "GET",
		url: "https://finalproject.site/api/v1/users/" + urlParams.get("id"),
		crossDomain: true,
		dataType: "json",
		success: function (response) {
			$("#firstName").val(response.fname);
			$("#lastName").val(response.lname);
			$("#email").val(response.email);
			$("#phoneNumber").val(response.phone_number);
			$("#address").val(response.address);
			$("#city").val(response.city);
			$("#state").val(response.state);
			$("#postalCode").val(response.postal_code);

			$("#userForm").fadeIn(1000);
		},
	});

	$("#updateUserBtn").click(function (e) {
		e.preventDefault();

		const firstName = $("#firstName").val();
		const lastName = $("#lastName").val();
		const email = $("#email").val();
		const phoneNumber = $("#phoneNumber").val();
		const address = $("#address").val();
		const city = $("#city").val();
		const state = $("#state").val();
		const postalCode = $("#postalCode").val();

		const updatedUserData = {
			fname: firstName,
			lname: lastName,
			email: email,
			phone_number: phoneNumber,
			address: address,
			city: city,
			state: state,
			postal_code: postalCode,
		};

		console.log(updatedUserData);

		$.ajax({
			type: "PUT",
			url:
				"https://finalproject.site/api/v1/users/" + urlParams.get("id"),
			data: updatedUserData,
			dataType: "json",
			success: function (response) {
				alert("Successfully updated user!");
				window.location.href = "/final-project/user/user.html";
			},
		});
	});
});
