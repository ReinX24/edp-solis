$(document).ready(function () {
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
		},
	});

	$("#deleteUserBtn").click(function (e) {
		e.preventDefault();

        $.ajax({
            type: "DELETE",
            url: "https://finalproject.site/api/v1/users/" + urlParams.get("id"),
            success: function (response) {
                alert("Successfully deleted user!");
				window.location.href = "/final-project/user/user.html";
            }
        });
	});
});
