$(document).ready(function () {
	$("#submitUserBtn").click(function (e) {
		e.preventDefault();

		const firstName = $("#firstName").val();
		const lastName = $("#lastName").val();
		const email = $("#email").val();
		const phoneNumber = $("#phoneNumber").val();
		const address = $("#address").val();
		const city = $("#city").val();
		const state = $("#state").val();
		const postalCode = $("#postalCode").val();

		const newUserData = {
            fname: firstName,
            lastName: lastName,
            email: email,
            phone_number: phoneNumber,
            address: address,
            city: city,
            state: state,
            postal_code: postalCode
        };

        // console.log(userData);
		$.ajax({
			type: "POST",
			url: "https://finalproject.site/api/v1/users",
			data: newUserData,
			// headers: { "Content-Type": "application/json" },
			dataType: "json",
			success: function (response) {
				console.log(response);
			},
		});

        // Redirect to products index page
        // window.location.href = "/final-project/user/user.html";
	});
});
