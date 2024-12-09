$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "https://finalproject.site/api/v1/students",
		crossDomain: true,
		dataType: "json",
		success: function (response) {
			console.log(response);
			// Adding the elements to our page
			response.forEach((responseItem) => {
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

				const email = document.createElement("td");
				email.textContent = responseItem.email;

				newRow.append(email);

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

                // TODO: add other fields

                const editBtnRow = document.createElement("td");

                const editBtn = document.createElement("a");
                editBtn.className = "btn btn-primary";
                editBtn.textContent = 'Edit';
                editBtn.href = "student_edit.html?id=" + responseItem.id;

                editBtnRow.append(editBtn);
                newRow.append(editBtnRow)

				$("#studentTable").append(newRow);
			});
		},
	});
});
